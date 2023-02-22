import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { OAUTH_SIGN_IN_REDIRECT_URL } from '@/configs/urls';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }: any) {
      return OAUTH_SIGN_IN_REDIRECT_URL;
    },
  },
};
export default NextAuth(authOptions);
