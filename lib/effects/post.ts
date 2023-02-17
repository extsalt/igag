import { POST_GET_URL } from '@/configs/apis';
import useSWR from 'swr';

const fetcher = (args: string) => fetch(args).then((res) => res.json());

export default function usePost(endpoint?: string) {
  const url = endpoint || POST_GET_URL;
  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    posts: data,
    error,
    isLoading,
  };
}
