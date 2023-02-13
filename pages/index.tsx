import Head from 'next/head';
import { Inter } from '@next/font/google';
import Layout from '@/components/layouts/layout';
import { Container } from '@chakra-ui/react';
import Post from '@/components/posts/post';
import { prisma } from '@/lib/prisma';
import useSWR from 'swr';
import redis from '@/lib/redis';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ posts }: any) {
  return (
    <>
      <Head>
        <title>IGAG</title>
        <meta name="description" content="Lots of memes and fun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Container maxW="container.lg" as="main">
          {posts.map((post: any) => (
            <Post post={post} key={post.id} />
          ))}
        </Container>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  let cachedPosts = await redis.get('posts');

  if (cachedPosts) {
    return {
      props: {
        posts: JSON.parse(cachedPosts),
        cacheHit: true,
      },
    };
  }

  const posts = await prisma.posts.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    take: 10,
  });

  redis.set('posts', JSON.stringify(posts));

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
      cacheHit: false,
    },
  };
}
