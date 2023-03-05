import { signOut, useSession } from 'next-auth/react';
import Layout from '@/components/layouts/layout';
import LoadingPlaceholder from '@/components/user/profile/LoadingPlaceholder';
import { useState } from 'react';
import getSignature from '@/lib/cloudinary/getSignature';
import upload from '@/lib/cloudinary/upload';
import { USER_PROFILE_IMAGE_ULR } from '@/configs/apis';

export default function Profile() {
  const { data, status } = useSession();
  const [image, setImage] = useState<File | null>(null);

  async function changeImage() {
    if (image == null) {
      alert('Choose file');
      return;
    }

    const { signature, timestamp, key } = await getSignature();

    const formData = new FormData();
    // @ts-ignore
    formData.append('file', image);
    formData.append('signature', signature);
    formData.append('timestamp', timestamp);
    formData.append('api_key', key);
    const response = await upload(formData);

    if (response) {
      const image = response.secure_url;
      fetch(USER_PROFILE_IMAGE_ULR, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ image }),
      }).then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then(json => alert('Done'));
    }
  }

  if (status == 'loading') {
    return <LoadingPlaceholder />;
  }

  function imageChangeHandler(e: any) {
    setImage(e.target.files[0]);
  }

  return (
    <Layout>
      <div className='bg-gray-200 min-w-full min-h-screen py-10'>
        {/* username container */}
        <div
          className='username-container border-1 border-red-50 p-4 bg-white max-w-sm mx-auto rounded-md shadow-md'>
          <div className=''>
            <h2 className='text-md font-semibold'>Change username</h2>
          </div>

          <div className='my-2'>
            <input type='text'
                   className='text-md outline outline-1 outline-blue-500 hover:outline-1 px-2 py-1 focus:outline-1 min-w-full rounded-sm' />
          </div>

          <div className='my-2'>
            <button className='outline outline-1 px-3 py-1 rounded-sm bg-blue-600 text-white'>Update</button>
          </div>
        </div>
        {/* username container */}

        {/* avatar container */}
        <div
          className='username-container border-1 border-red-50 p-4 bg-white max-w-sm mx-auto rounded-md shadow-md my-4'>
          <div className=''>
            <h2 className='text-md font-semibold'>Change picture</h2>
          </div>

          <div className='my-2'>
            <input type='file'
                   className='text-md min-w-full rounded-sm'
                   onChange={(e) => imageChangeHandler(e)}
            />
          </div>

          <div className='my-4'>
            <button className='outline outline-1 px-3 py-1 rounded-sm bg-blue-600 text-white'
                    onClick={() => changeImage()}
            >Update
            </button>
          </div>
        </div>
        {/* avatar container */}

        {/* email container */}
        <div
          className='username-container border-1 border-red-50 p-4 bg-white max-w-sm mx-auto rounded-md shadow-md my-4'>
          <div className=''>
            <h2 className='text-md font-semibold'>Email</h2>
          </div>

          <div className='my-2'>
            <span className=''>{data?.user?.email}</span>
          </div>
        </div>
        {/* email container */}

        {/* Logout container */}
        <div
          className='username-container border-1 border-red-50 p-4 bg-white max-w-sm mx-auto rounded-md shadow-md my-4'>
          <div className=''>
            <button className='outline outline-1 px-3 py-1 rounded-sm bg-red-600 text-white'
                    onClick={() => signOut()}>Logout
            </button>
          </div>
        </div>
        {/* Logout container */}

      </div>
    </Layout>
  );
}

