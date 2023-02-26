import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { OAUTH_SIGN_IN_REDIRECT_URL } from '@/configs/urls';
import { prisma } from '@/lib/prisma';
import _ from 'lodash';

const crypto = require('crypto');

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { type: 'text' },
        email: { type: 'email' },
        password: { type: 'password' },
      },
      async authorize(credentials, req) {
        const username = _.get(credentials, 'username');
        const email = _.get(credentials, 'email');
        const password = _.get(credentials, 'password');

        if (
          _.isEqual(password, 'undefined') ||
          _.isEqual(username, 'undefined') ||
          _.isEqual(email, 'undefined')
        ) {
          return null;
        }

        const existingUser = await prisma.users.findFirst({ where: { username, email } });

        if (existingUser) {
          return null;
        }

        const image = 'https://seccdn.libravatar.org/avatar/' + crypto.createHash('md5', email?.toLocaleUpperCase()).digest('hex');
        // @ts-ignore
        const user = await prisma.users.create({ data: { username, email, password, image } });

        if (user) {
          return {
            id: String(user.id),
            name: username,
            image,
            email,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }: any) {
      console.log(url, baseUrl);
      return OAUTH_SIGN_IN_REDIRECT_URL;
    },
  },
};
export default NextAuth(authOptions);
