import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Highlight,
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
export default function ContactUs() {
  return (
    <Container maxW="lg" as="main" py="4">
      <Card colorScheme="blackAlpha" variant="outline">
        <CardHeader>
          <Center>
            <VStack>
              <Heading size="lg">
                <Link href="/">IGAG</Link>
              </Heading>
              <Heading size="md" color="gray.500">
                Contact Us
              </Heading>
            </VStack>
          </Center>
        </CardHeader>
      </Card>

      <Card>
        <CardBody>
          <Text as="span">Write your query to: </Text>
          <Highlight
            query={['igag.in@outlook.com']}
            styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
          >
            igag.in@outlook.com
          </Highlight>
        </CardBody>
      </Card>
    </Container>
  );
}
