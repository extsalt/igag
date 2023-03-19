import { NextApiRequest, NextApiResponse } from 'next';
import Joi from 'joi';
import { prisma } from '@/lib/prisma';
import redis from '@/lib/redis';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

/**
 * Like the post
 *
 * @param request
 * @param response
 */
export default async function handle(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const session = await getServerSession(request, response, authOptions);

  if (!session) {
    response.status(401).json({ message: 'Unauthorized' });
    return;
  }

  let postId: number | null;

  try {
    postId = Joi.attempt(request.query.id, Joi.number().integer());
  } catch (e: any) {
    response.status(422).json({ message: 'Invalid post id' });
    return;
  }

  const authUser: any = session?.user;

  let user: any = await redis.get('user:' + authUser.username);

  // @ts-ignore
  user = JSON.parse(user);

  if (!user) {
    // @ts-ignore
    user = await prisma.users.findFirst({
      where: {
        email: authUser.email,
      },
    });

    // @ts-ignore
    await redis.set('user:' + user.username, JSON.stringify(user));
  }

  const post: any = await prisma.posts.findFirst({ where: { id: postId } });

  if (!post) {
    response.status(400).json({});
  }

  let userInteractionOnPost = null;

  try {
    userInteractionOnPost =
      await prisma.usersInteractionOnPosts.findFirstOrThrow({
        where: { postId: postId, userId: user.id },
      });
  } catch (e: any) {
    // @ts-ignore
    await prisma.usersInteractionOnPosts.create({
      data: { postId: postId, userId: user.id },
    });

    await prisma.posts.update({
      where: { id: postId },
      data: { likes: ++post.likes },
    });

    response.json({ likes: post.likes });
    return;
  }

  // user has either liked or disliked this post
  if (!userInteractionOnPost.like) {
    //user has dislikes this post
    await prisma.usersInteractionOnPosts.deleteMany({
      where: {
        // @ts-ignore
        postId: postId,
        userId: user.id,
      },
    });

    await prisma.usersInteractionOnPosts.create({
      data: {
        postId: postId,
        userId: user.id,
      },
    });

    await prisma.posts.update({
      data: {
        dislikes: --post.dislikes,
        likes: ++post.likes,
      },
      where: {
        id: postId,
      },
    });
  }
  response.json({ likes: post.likes });
}
