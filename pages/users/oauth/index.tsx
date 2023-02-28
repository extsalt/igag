import Link from 'next/link';
import { useEffect, useState } from 'react';
import { USER_OAUTH_CREATE_URL } from '@/configs/urls';
import { useSession } from 'next-auth/react';

export default function OauthUser() {
  const { data, status } = useSession();
  const [username, setUsername] = useState<String>('');
  const [identityProvider] = useState<String>('google');
  const [email, setEmail] = useState<String>();
  const [image, setImage] = useState<String>();

  useEffect(() => {
    setEmail(data?.user?.email || '');
    setImage(data?.user?.image || '');
  }, [data]);

  async function createAccount() {
    const response = await fetch(USER_OAUTH_CREATE_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, identityProvider, email, image }),
    }).then((response: Response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Failed to create user');
    })
      .catch(e => {
        console.log(e);
      });

    console.log(response);
  }

  return (
    <>
      <div className='bg-gray-200 min-w-full min-h-screen py-10'>
        <div
          className='oauth-user-container h-96 border-1 border-red-50 p-4 bg-white max-w-sm mx-auto rounded-md shadow-md'>
          <div className='flex justify-center'>
            <h2 className='text-2xl font-semibold'>IGAG</h2>
          </div>

          <div className='form-control my-4'>
            <div className='flex flex-col'>
              <label htmlFor='username' className='font-semibold'>
                Choose username
              </label>

              <div className='flex space-x-4'>
                <input
                  className='border-2 border-gray-300 px-2 py-1 rounded-sm'
                  type='text'
                  id='username'
                  onChange={(e: any) => setUsername(e.target.value)}
                />

                <button className=' px-4 py-2 bg-gray-600 text-white rounded-sm'>
                  Check
                </button>
              </div>
            </div>

            <div className='my-6'>
              <div className='flex space-x-6 items-center'>
                <img
                  className='rounded-sm'
                  src={data?.user?.image || ''}
                  referrerPolicy='no-referrer'
                  width={96}
                  height={96}
                  alt={data?.user?.name || ''}
                />
                <Link href='/forgot-password' className='text-blue-600'>
                  Change
                </Link>
              </div>
            </div>

            <div className='my-4 flex justify-center'>
              <button
                className='px-6 py-2 bg-blue-600 min-w-full text-white rounded-sm'
                onClick={() => createAccount()}
              >
                Create my account
              </button>
            </div>

            <div className='my-8'>
              <p className='text-gray-500 text-xs'>
                By creating a account, you are agreeing to IGAG privacy and
                policy.
              </p>
            </div>
          </div>
        </div>

        <div className='max-w-sm mx-auto my-6'>
          <div className='flex justify-center space-x-2'>
            <span>Already have account? </span>
            <Link href='/login' className='text-blue-600'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}