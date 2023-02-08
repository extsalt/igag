import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
export default function PrivacyPolicy() {
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
                Privacy Policy
              </Heading>
            </VStack>
          </Center>
        </CardHeader>
        <CardBody>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            adipisci fugiat voluptatum nihil vel placeat, reiciendis doloremque
            impedit corrupti, necessitatibus dicta iure. Impedit quas magni
            quibusdam aut aliquam tempora itaque?
          </Text>
        </CardBody>
      </Card>
    </Container>
  );
}
