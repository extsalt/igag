import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Layout({ children }: any) {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Box as="header" pb={{ base: '12', md: '24' }}>
        <Box as="nav" bg="bg-surface" boxShadow="sm">
          <Container py={{ base: '4', lg: '5' }}>
            <HStack spacing="10" justify="space-between">
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {['Product', 'Pricing', 'Resources', 'Support'].map(
                      (item) => (
                        <Button key={item}>{item}</Button>
                      )
                    )}
                  </ButtonGroup>
                  <HStack spacing="3">
                    <Button variant="ghost">Sign in</Button>
                    <Button variant="primary">Sign up</Button>
                  </HStack>
                </Flex>
              ) : (
                <Heading>IGAG</Heading>
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
      {children}
      <footer></footer>
    </>
  );
}
