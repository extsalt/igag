import { useState } from 'react';
import { CLOUDINARY_GET_SIGNATURE, POST_STORE_URL } from '@/configs/apis';
import { useRouter } from 'next/router';

/**
 * Create post
 */
export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  function handleTitleChange(e: any) {
    setTitle(e.target.value);
  }

  function handleFileChange(e: any) {
    setFile(e.target.files[0]);
  }

  async function getSignature() {
    return fetch(CLOUDINARY_GET_SIGNATURE).then((response) => response.json());
  }

  /**
   * Create post
   */
  async function createPost() {
    if (file == null) {
      alert('Choose file');
      return;
    }

    const { signature, timestamp, key } = await getSignature();
    console.table({ signature, timestamp, key });
    const formData = new FormData();
    formData.append('file', file);
    formData.append('signature', signature);
    formData.append('timestamp', timestamp);
    formData.append('api_key', key);
    //polyfill fetch
    const response = await fetch(
      'https://api.cloudinary.com/v1_1/dih1r5web/image/upload',
      {
        method: 'post',
        body: formData,
      },
    ).then((response) => response.json());

    console.log(response);
    if (response) {
      const body = {
        title,
        imageUrl: response.secure_url,
      };
      await fetch(POST_STORE_URL, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      router.push('/');
    }
  }

  return (
    <div>
      <div>
        <div>
          <div>Create Post</div>
        </div>

        <div>
          <div>
            <div>
              <div>Title of post</div>
              <input
                type='text'
                placeholder='Title'
                autoFocus={true}
                onChange={handleTitleChange}
              />

              <div>Choose file</div>
              <input
                type='file'
                placeholder='Choose file'
                accept='image/*'
                onChange={handleFileChange}
              />

              <button
                onClick={() => createPost()}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
