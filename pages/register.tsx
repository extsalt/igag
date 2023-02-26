import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
export default function Login() {
  const [username, setUsername] = useState<String>();
  const [email, setEmail] = useState<String>();
  const [password, setPassword] = useState<String>();

  /**
   * Create user's account
   */
  async function createAccount() {
    signIn('credentials', {
      redirect: true,
      email,
      password,
      username,
      callbackUrl: '/',
    });
  }

  return (
    <div className="bg-gray-200 min-w-full min-h-screen py-10">
      <div className="login-container h-96 border-1 border-red-50 p-4 bg-white max-w-sm mx-auto rounded-md shadow-md">
        <div className="flex justify-center">
          <h2 className="text-2xl font-semibold">IGAG</h2>
        </div>

        <div className="my-4 flex justify-center space-x-4">
          <button className="" onClick={() => signIn('google')}>
            <Image
              src="/google.svg"
              alt="Login with google"
              width={24}
              height={24}
            />
          </button>
          <button onClick={() => signIn('twitter')}>
            <Image
              src="/twitter.svg"
              alt="Login with twitter"
              width={24}
              height={24}
            />
          </button>

          <button onClick={() => signIn('github')}>
            <Image
              src="/github.svg"
              alt="Login with github"
              width={24}
              height={24}
            />
          </button>

          <button onClick={() => signIn('facebook')}>
            <Image
              src="/facebook.svg"
              alt="Login with facebook"
              width={24}
              height={24}
            />
          </button>
        </div>

        <div className="form-control my-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="font-semibold">
              Username
            </label>
            <input
              className="border-2 border-gray-300 px-2 py-1 rounded-sm"
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col my-4">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              className="border-2 border-gray-300 px-2 py-1 rounded-sm"
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col my-4">
            <div className="flex justify-between">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
            </div>
            <input
              className="border-2 border-gray-300 px-2 py-1 rounded-sm"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="my-4 flex justify-center">
            <button
              className="px-6 py-2 bg-blue-600 min-w-full text-white rounded-sm"
              onClick={() => createAccount()}
            >
              Create my account
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-sm mx-auto my-6">
        <div className="flex justify-center space-x-2">
          <span>Already have an account? </span>
          <Link href="/register" className="text-blue-600">
            Login?
          </Link>
        </div>
      </div>
    </div>
  );
}
