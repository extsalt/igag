import React, { useState, useRef, useCallback } from 'react';
import usePosts from '@/lib/effects/posts';
import Post from '@/components/posts/post';

import {
  Box,
  CircularProgress,
  Container,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react';

type Post = {
  id: any;
};

type Posts = Post[];

export default function Home() {
  const [query, setQuery] = useState('');
  const [page, setPageNumber] = useState(1);

  const { posts, loading } = usePosts(page);

  function handleSearch(e: {
    target: { value: React.SetStateAction<string> };
  }) {
    setQuery(e.target.value);
    setPageNumber(1);
  }
  const observer = useRef<IntersectionObserver>();
  const lastBookElementRef = useCallback(
    (node: any) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <Container maxW="lg" as="main">
      {loading && (
        <>
          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>

          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>

          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>

          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>

          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>

          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>

          <Box padding="6" boxShadow="lg" bg="white">
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
          </Box>
        </>
      )}

      {posts.map((post: Post, index: number) => {
        if (posts.length === index + 1) {
          return (
            <div
              key={post.id}
              ref={lastBookElementRef}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <CircularProgress isIndeterminate value={80} py="4" />
            </div>
          );
        } else {
          return <Post key={post.id} post={post} />;
        }
      })}
    </Container>
  );
}
