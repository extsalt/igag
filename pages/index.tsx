import { Skeleton, Stack } from '@chakra-ui/react';
import { POST_GET_URL } from '@/configs/apis';
import useSWRInfinite from 'swr/infinite';

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
  return (
    <div>
      {getPost(data)}
      <button
        onClick={() => setSize(size + 1)}
        style={{ border: '1px solid blue' }}
      >
        Load more...
      </button>
    </div>
  );
}

function getPost(posts: any[] | undefined) {
  console.log(posts);

  if (posts) {
    const pagePost = posts[0];
    return pagePost.map(function (post: any) {
      return <div key={post.id}> {post.title}</div>;
    });
  }

  return <></>;
}
