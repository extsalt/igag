import { signOut, useSession } from 'next-auth/react';

export default function Profile() {
  const { data, status } = useSession();

  if (status == 'loading') {
    return <>loading...</>;
  }

  return (
    <>
      <p>
        {data?.user?.name}
      </p>
      <button className='bg-red-400 px-3 py-2 text-white' onClick={() => signOut()}>Logout</button>
    </>
  );
}

