import EllipsisVertical from '../icons/ellipsis-vertical';
export default function Post({ post }: any) {
  return (
    <>
      <div className="my-2 min-w-full">
        {/* post header */}
        <div className="flex justify-between flex-1 border rounded-sm">
          {/* left side */}
          <div className="p-2 bg-white flex items-center space-x-4">
            <div className="object-center">
              <img
                className="h-12 w-12 rounded-full object-contain"
                src={post.imageUrl}
                alt={post.title}
              />
            </div>
            <div>
              <div className="text-lg font-medium">Cyberpunk</div>
              <p className="text-slate-500 text-sm">2 days ago</p>
            </div>
          </div>
          {/* left side */}

          {/* right side */}
          <div className=" px-4 flex justify-center">
            <button>
              <EllipsisVertical />
            </button>
          </div>
          {/* right side */}
        </div>
        {/* post header */}

        {/* post body */}
        <div className="post-media-container">
          <img
            className="h-post-image-height min-w-full object-cover object-center rounded-sm"
            src={post.imageUrl}
            alt={post.title}
            loading="lazy"
            decoding="async"
          />
        </div>
        {/* post body */}

        <div>{/* post footer */}</div>
      </div>
    </>
  );
}
