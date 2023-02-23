export default function Post({ post }: any) {
  return (
    <>
      <div className="my-2">
        {/* post header */}
        <div className="flex justify-between">
          <div>hello</div>
          <div>world</div>
        </div>
        {/* post header */}

        <div>
          {/* post body */}
          <img className="object-fill" src={post.imageUrl} alt={post.title} />
        </div>

        <div>{/* post footer */}</div>
      </div>
    </>
  );
}
