import Layout from '@/components/layouts/layout';
import { Avatar, Container, Flex, Text } from '@chakra-ui/react';
import { prismaClient } from '@/configs';

declare type User = {
  username: string;
  email: string;
  createdAt: string;
};

export default function Users({ users }: any) {
  return (
    <>
      <Layout>
        <Container maxW="lg" className="dev-users">
          {getUsers(users)}
        </Container>
      </Layout>
    </>
  );
}

function getUsers(users: User[]) {
  return users.map(function (user: User) {
    return (
      <Flex key={user.username} p="4">
        <Avatar src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/82/82ea23db4ec09234e887073bb26057994e4a368b_full.jpg" />
        <h5>{user.username}</h5>
        <Text>{user.email}</Text>
        <Text>{user.createdAt}</Text>
      </Flex>
    );
  });
}

export async function getStaticProps() {
  const users = await prismaClient.users.findMany();

  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}
