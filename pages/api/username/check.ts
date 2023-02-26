import { prisma } from '@/lib/prisma';
import _ from 'lodash';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  let username = request.query.q;

  if (typeof username == 'undefined' || username.length < 3) {
    response.status(400).json({
      message: 'Invalid username',
    });
  }

  if (_.isArray(username)) {
    username = _.head(username);
  }

  try {
    const user = await prisma.users.findFirst({
      where: { username: username },
    });

    if (user) {
      response.status(400).json({
        message: `${username} is already taken`,
      });
    }
  } catch (e) {
    response.status(500).json(e);
  }

  return response.status(204).json(null);
}
