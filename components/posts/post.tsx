import EllipsisVertical from '../icons/ellipsis-vertical';
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');

export default function Post({ post }: any) {
  dayjs.extend(relativeTime)
  const humanReadableDiff = dayjs(post.createdAt);

  return (
    <>
      <div className='my-2 min-w-full'>
        {/* post header */}
        <div className='flex justify-between flex-1 border rounded-sm'>
          {/* left side */}
          <div className='p-2 bg-white flex items-center space-x-4'>
            <div className='object-center'>
              <img
                className='h-12 w-12 rounded-full object-contain'
                src={post.user.image}
                alt={post.title}
              />
            </div>
            <div>
              <div className='text-lg font-medium'>{post.user.username || 'user' + post.user.id}</div>
              <p className='text-slate-500 text-sm'>{humanReadableDiff.fromNow()}</p>
            </div>
          </div>
          {/* left side */}

          {/* right side */}
          <div className=' px-4 flex justify-center'>
            <button>
              <EllipsisVertical />
            </button>
          </div>
          {/* right side */}
        </div>
        {/* post header */}


        {/*Post title*/}
        <div className='px-2 py-2'>
          {post.title}
        </div>
        {/*Post title*/}


        {/* post body */}
        <div className='post-media-container'>
          <img
            className='h-post-image-height min-w-full object-cover object-center rounded-sm'
            src={post.imageUrl}
            alt={post.title}
            loading='lazy'
            decoding='async'
          />
        </div>
        {/* post body */}


        {/* post footer */}
        <div></div>
        {/* post footer */}


      </div>
    </>
  );
}
