import { useSession } from 'next-auth/react';

export default function OauthUser() {
  const { data } = useSession();

  return (
    <>
      <p>User {data?.user?.name}</p>
      <p>User {data?.user?.email}</p>

      <img src={data?.user?.image || ''} />
    </>
  );
}
