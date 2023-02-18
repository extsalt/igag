import { useEffect, useState } from 'react';
import axios from 'axios';
import { POST_GET_URL } from '@/configs/apis';

export default function usePosts(page: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: any;
    axios({
      method: 'GET',
      url: POST_GET_URL,
      params: { page },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res): any => {
        setPosts((prevPosts): any => {
          return [...prevPosts, ...res.data];
        });
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  }, [page]);
  return { loading, error, posts };
}
