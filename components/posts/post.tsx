export default function Post({ post }: any) {
  return (
    <>
      <div className="my-2">
        {/* post header */}
        <div className="flex justify-between flex-1 border">
          {/* left side */}
          <div className="p-2 bg-white flex items-center space-x-4 ">
            <div className="">
              <img
                className="h-12 w-12 rounded-full"
                src={post.imageUrl}
                alt={post.title}
              />
            </div>
            <div>
              <div className="text-xl font-medium text-black">
                CybedafsdfasdfasdrPunk
              </div>
              <p className="text-slate-500">2 days ago</p>
            </div>
          </div>
          {/* left side */}

          {/* right side */}
          <div className="p-4">...</div>
          {/* right side */}
        </div>
        {/* post header */}

        {/* post body */}
        <div className="text-center">
          <img className="object-fill" src={post.imageUrl} alt={post.title} />
        </div>
        {/* post body */}

        <div>{/* post footer */}</div>
      </div>
    </>
  );
}
