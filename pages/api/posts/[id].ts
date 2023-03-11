import { NextApiRequest, NextApiResponse } from 'next';
import redis from '@/lib/redis';
import { prisma } from '@/lib/prisma';
import Joi from 'joi';

export default async function handle(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const schema = Joi.object({ id: Joi.number().integer() });

  let validatedRequest = null;

  try {
    validatedRequest = await schema.validateAsync({ ...request.query });
  } catch (e: any) {
    response.status(422).json({ message: 'Invalid post id' });
    return;
  }

  let cachedPost = await redis.get('post:' + validatedRequest.id);

  if (cachedPost) {
    response.json(JSON.parse(cachedPost));
    return;
  }

  const post = await prisma.posts.findUnique({
      where: { id: validatedRequest.id }, include:
        {
          user: {
            select: {
              id: true,
              username: true,
              image: true,
            },
          },
        },
    },
  );

  if (post) {
    const stringifyPost = JSON.stringify(post);
    await redis.set('post:' + validatedRequest.id, stringifyPost);
    response.json(JSON.parse(stringifyPost));
    return;
  }

  response.status(404).json(null);
}
