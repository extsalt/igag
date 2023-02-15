import { Inter } from '@next/font/google';
import { Button } from '@chakra-ui/react';
import Post from '@/components/posts/post';
import useSWR from 'swr';
import { POST_GET_URL } from '@/configs/apis';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data, error, isLoading } = useSWR(POST_GET_URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return data.map((post: any) => <Post post={post} key={post.id} />);
}

const fetcher = (args: string) => fetch(args).then((res) => res.json());
