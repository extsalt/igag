import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  HStack,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
// Send magic link or login with email
export default function Login() {
  return (
    <>
      <Container maxW="lg" as="main" py="4">
        <Card colorScheme="blackAlpha" size="lg" variant="outline">
          <CardBody>
            {/* Heading */}
            <Box my="4">
              <VStack>
                <Image src="/igag.png" height="96" width="96" alt="IGAG logo" />
              </VStack>
            </Box>
            {/* Heading */}
            <Box py="4" my="4">
              <VStack>
                <Input
                  type="email"
                  placeholder="Email address"
                  autoFocus={true}
                />
                <Button colorScheme="red" color="whiteAlpha.900">
                  Send Login Link
                </Button>
              </VStack>
            </Box>
            <Box my="4">
              <VStack>
                <Button colorScheme="whatsapp" leftIcon={<FaGoogle />}>
                  Login with Google
                </Button>
                <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                  Login with Facebook
                </Button>
              </VStack>
            </Box>
            <Box my="8">
              <VStack>
                <Link href="/">
                  <Text as="span" color="gray.500">
                    Go Back
                  </Text>
                </Link>
              </VStack>
            </Box>
          </CardBody>
        </Card>
        {/* Other links */}
        <Card variant="outline" my="4">
          <CardBody>
            <HStack justify="center">
              <Link href="/privacy-policy">
                <Text as="span" color="gray.500">
                  Policy
                </Text>
              </Link>
              <Link href="/terms-conditions">
                <Text as="span" color="gray.500">
                  Terms
                </Text>
              </Link>
              <Link href="/contact-us">
                <Text as="span" color="gray.500">
                  Contact IGAG
                </Text>
              </Link>
            </HStack>
          </CardBody>
        </Card>
      </Container>
    </>
  );
}
