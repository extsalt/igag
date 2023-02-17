import { Skeleton, Stack } from '@chakra-ui/react';
import { POST_GET_URL } from '@/configs/apis';
import useSWRInfinite from 'swr/infinite';
import { useEffect, useRef } from 'react';
import Post from '@/components/posts/post';

const options = {
  initialSize: 1,
  revalidateAll: false,
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const getKey = (_pageIndex: any, _previousPageData: any) => {
  return POST_GET_URL;
};

export default function Home() {
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher, options);
  const sentinel: any = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          console.log('Oh my bottom');
        }
      });
    });

    observer.observe(sentinel.current);
  }, []);

  return (
    <>
      <div>{getPost(data)}</div>
      <div ref={sentinel} style={{ marginTop: '30px' }}>
        sentinel
      </div>
    </>
  );
}

function getPost(posts: any[] | undefined): JSX.Element {
  if (posts) {
    const pagePost = posts[0];
    return pagePost.map(function (post: any) {
      return <Post key={post.id} post={post} />;
    });
  }

  return <></>;
}
