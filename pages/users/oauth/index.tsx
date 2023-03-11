import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { prisma } from '@/lib/prisma';
import createUserAvatar from '@/lib/createUserAvatar';

export default function OauthUser() {
  return <></>;
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  const redirect = {
    destination: '/login',
    permanent: false,
  };

  if (session) {
    // @ts-ignore
    const user = await prisma.users.findFirst({ where: { email: session?.user?.email } });

    if (!user) {
      let identityProvider = 'credential';

      if (session?.user?.image && session?.user?.image.includes('google')) {
        identityProvider = 'google';
      }

      if (session?.user?.image && session?.user?.image.includes('github')) {
        identityProvider = 'github';
      }

      const user = await prisma.users.create({
        // @ts-ignore
        data: { email: session?.user?.email, identityProvider, image: createUserAvatar(session.user.email) },
      });

      await prisma.users.update({
        data: {
          username: 'username' + user.id,
        },
        where: {
          id: user.id,
        },
      });
    }

    redirect.destination = '/';
  }

  return { redirect };
}