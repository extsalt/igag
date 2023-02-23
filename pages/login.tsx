import { signIn } from 'next-auth/react';
import Image from 'next/image';
export default function Login() {
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
            <label htmlFor="email" className="">
              Your email
            </label>
            <input
              className="border-2 border-blue-300 px-2 py-1 rounded-sm"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col my-2">
            <label htmlFor="password" className="">
              Your password
            </label>
            <input
              className="border-2 border-blue-300 px-2 py-1 rounded-sm"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="my-2 flex justify-center">
            <button className="px-4 py-1 bg-blue-600 text-white rounded-sm">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
