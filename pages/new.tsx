import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { POST_STORE_URL } from '@/configs/apis';
import { useRouter } from 'next/router';
/**
 * Create post
 */
export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  function handleTitleChange(e: any) {
    setTitle(e.target.value);
  }

  function handleFileChange(e: any) {
    setFile(e.target.files[0]);
  }

  /**
   * Create post
   */
  async function createPost() {
    const formData = new FormData();
    formData.append('title', title);
    if (file) {
      formData.append('file', file);
    }

    //TODO convert this fetch into service
    await fetch(POST_STORE_URL, {
      method: 'POST',
      body: formData,
    });

    router.push('/');
  }

  return (
    <Container as="main" maxW="lg">
      <Card>
        <CardHeader>
          <Heading>Create Post</Heading>
        </CardHeader>

        <CardBody>
          <FormControl>
            <VStack align="initial">
              <FormLabel>Title of post</FormLabel>
              <Input
                type="text"
                placeholder="Title"
                autoFocus={true}
                onChange={handleTitleChange}
              />

              <FormLabel>Choose file</FormLabel>
              <Input
                type="file"
                placeholder="Choose file"
                accept="image/*"
                onChange={handleFileChange}
              />

              <Button
                colorScheme="yellow"
                onClick={() => createPost()}
                fontWeight="extrabold"
              >
                Post
              </Button>
            </VStack>
          </FormControl>
        </CardBody>
      </Card>
    </Container>
  );
}
