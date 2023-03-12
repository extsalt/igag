import { NextApiRequest, NextApiResponse } from 'next';
import auth from '@/lib/auth';
import Joi from 'joi';
import { prisma } from '@/lib/prisma';

export default async function handle(request: NextApiRequest, response: NextApiResponse) {
  const user = await auth(request, response);

  if (!user) {
    response.status(401).json({ message: 'Unauthenticated' });
    return;
  }

  let postId: number | null;

  try {
    postId = Joi.attempt(request.query.id, Joi.number().integer());
  } catch (e: any) {
    response.status(422).json({ message: 'Invalid post id' });
    return;
  }

  const post: any = await prisma.posts.findFirst({ where: { id: postId } });

  if (!post) {
    response.status(404).json({ message: 'Post not found' });
    return;
  }

  const userInteractionOnPost = await prisma.usersInteractionOnPosts.findFirst({
    where: { postId: postId, userId: user.id, like: false },
  });

  if (userInteractionOnPost) {
    response.status(400).json({ dislikes: post.dislikes });
    return;
  }

  // @ts-ignore
  await prisma.usersInteractionOnPosts.create({
    data: { postId: postId, userId: user.id, like: false },
  });

  await prisma.posts.update({
    where: { id: postId }, data: { dislikes: ++post.dislikes },
  });

  response.json({ dislikes: post.dislikes });
}