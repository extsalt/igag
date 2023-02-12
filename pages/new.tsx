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
import { CLOUDINARY_GET_SIGNATURE } from '@/configs/apis';
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

  async function getSignature() {
    return fetch(CLOUDINARY_GET_SIGNATURE).then((response) => response.json());
  }

  /**
   * Create post
   */
  async function createPost() {
    if (file == null) {
      alert('Choose file');
      return;
    }

    const { signature, timestamp, key } = await getSignature();
    console.table({ signature, timestamp, key });
    const formData = new FormData();
    formData.append('file', file);
    formData.append('signature', signature);
    formData.append('timestamp', timestamp);
    formData.append('api_key', key);
    //polyfill fetch
    const response = await fetch(
      'https://api.cloudinary.com/v1_1/dih1r5web/image/upload',
      {
        method: 'post',
        body: formData,
      }
    ).then((response) => response.json());

    console.log(response);
    if (response) {
      const body = {
        title,
        imageUrl: response.secure_url,
      };
      await fetch(POST_STORE_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      router.push('/');
    }
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
