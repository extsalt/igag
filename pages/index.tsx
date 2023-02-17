import { Button, Box, Container, Skeleton, Stack } from '@chakra-ui/react';
import Post from '@/components/posts/post';
import usePost from '@/lib/effects/post';
export default function Home() {
  const { posts, error, isLoading } = usePost();

  if (error) return <div>failed to load</div>;
  if (isLoading)
    return (
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    );

  return (
    <Container as="main" maxW="lg">
      <Button>Call Effect</Button>
      {posts.map((post: any) => (
        <Post post={post} key={post.id} />
      ))}

      <Box>
        <p>Loading more...</p>
      </Box>
    </Container>
  );
}
