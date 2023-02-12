import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { HiDotsVertical } from 'react-icons/hi';

export default function Post({ post }: any) {
  return (
    <Card className="dev-post">
      <CardHeader>
        <Box>
          <HStack spacing="10px" className="dev-user-avatar">
            <Avatar
              name="User name"
              src="https://randomuser.me/img/creator_arron.png"
            />

            <Box className="dev-username">
              <Text as="h4" style={{ fontWeight: 'bold' }}>
                @username
              </Text>

              <Text className="dev-timestamp">{post.createdAt}</Text>
            </Box>

            <Spacer />

            <Box className="dev-post-options">
              <HiDotsVertical />
            </Box>
          </HStack>
        </Box>

        <Box className="dev-post-title">
          <Text>{post.title}</Text>
        </Box>
      </CardHeader>

      <CardBody>
        <Image objectFit="cover" src={post.imageUrl} alt={post.title} />
      </CardBody>

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
        <Button flex="1" variant="ghost">
          Like
        </Button>
        <Button flex="1" variant="ghost">
          Comment
        </Button>
        <Button flex="1" variant="ghost">
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}
