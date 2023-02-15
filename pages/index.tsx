import { Inter } from '@next/font/google';
import { Button, Skeleton, Stack } from '@chakra-ui/react';
import Post from '@/components/posts/post';
import useSWR from 'swr';
import { POST_GET_URL } from '@/configs/apis';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data, error, isLoading } = useSWR(POST_GET_URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );

  return data.map((post: any) => <Post post={post} key={post.id} />);
}

const fetcher = (args: string) => fetch(args).then((res) => res.json());
