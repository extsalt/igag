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

export default function Post() {
  return (
    <Card className='dev-post'>
      <CardHeader>
        <Box>
          <HStack spacing='10px' className='dev-user-avatar'>
            <Avatar
              name='User name'
              src='https://randomuser.me/img/creator_arron.png'
            />

            <Box className='dev-username'>
              <Text as='h4' style={{ fontWeight: 'bold' }}>
                @username
              </Text>

              <Text className='dev-timestamp'>
                2 min ago
              </Text>
            </Box>

            <Spacer />

            <Box className='dev-post-options'>
              <HiDotsVertical />
            </Box>
          </HStack>
        </Box>

        <Box className='dev-post-title'>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
            magni officia quas totam veniam? Accusamus voluptatibus?
          </Text>
        </Box>
      </CardHeader>

      <CardBody>
        <Image
          objectFit='cover'
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
        />
      </CardBody>

      <CardFooter
        justify='space-between'
        flexWrap='wrap'
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
        <Button flex='1' variant='ghost'>
          Like
        </Button>
        <Button flex='1' variant='ghost'>
          Comment
        </Button>
        <Button flex='1' variant='ghost'>
          Share
        </Button>
      </CardFooter>
    </Card>
  );
}
