import { signIn } from 'next-auth/react';
export default function Login() {
  return (
    <>
      <div>
        <button
          className="border border-r-2 bg-green-900 px-4 py-1 text-white"
          onClick={() => signIn('github')}
        >
          Login with Github
        </button>
      </div>

      <div>
        <button
          className="border border-r-2 bg-green-900 px-4 py-1 text-white"
          onClick={() => signIn('google')}
        >
          Login with Google
        </button>
      </div>
    </>
  );
}
