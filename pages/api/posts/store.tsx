import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { server } from '@/configs';
export const config = {
  api: {
    bodyParser: false, // disable nextjs body parsing
  },
};

/**
 * Store post
 *
 * @param request
 * @param response
 */
export default async function handle(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const options = {
    maxFiles: 1, // just one file,
    uploadDir: './public/u/',
    keepExtensions: true,
    filter: function ({ name, originalFilename, mimetype }: any) {
      // keep only images
      return mimetype && mimetype.includes('image');
    },
  };
  const form = formidable(options);
  form.parse(request, async function (err, fields, files) {
    // handle any error occur while parsing request
    if (err) {
      response
        .status(400)
        .json({ message: 'Something excepted happened, please try again.' });
      return;
    }

    const { title }: any = fields;
    const { file }: any = files;

    const imageUrl = server + '/u/' + file.newFilename;

    const prismaClient = new PrismaClient({
      log: ['query'],
    });

    const post = await prismaClient.posts.create({
      data: {
        title,
        slug: title,
        userId: 1,
        imageUrl,
      },
    });
    response.json({
      post,
    });
  });
}
