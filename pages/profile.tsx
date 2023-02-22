import { signOut } from 'next-auth/react';

export default function Profile() {
  return (
    <>
      <p>
        <button onClick={() => signOut()}>Logout</button>
      </p>
    </>
  );
}
