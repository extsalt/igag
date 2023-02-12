import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { server } from '@/configs';
const cloudinary = require('cloudinary').v2;

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
    uploadDir: './',
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
      response.status(400).json({
        _error: err,
        message: 'Something excepted happened, please try again.',
      });
      return;
    }

    const { title }: any = fields;
    const { file }: any = files;

    const imagePath = './' + file.newFilename;

    cloudinary.config({
      cloud_name: 'dih1r5web',
      api_key: '417548972434439',
      api_secret: 'e7pnFSkZGBydMTGjU9xpicqYn9Q',
    });

    const res = cloudinary.uploader.upload(imagePath);

    res
      .then(async function (data: any) {
        const prismaClient = new PrismaClient({
          log: ['query'],
        });

        const imageUrl = data.secure_url;

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
      })
      .catch((err: any) => {
        response.status(400).json(err);
      });
  });
}
