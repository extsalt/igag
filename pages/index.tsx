import React, { useState, useRef, useCallback } from 'react';

import Post from '@/components/posts/post';
import Layout from '@/components/layouts/layout';
import { usePost } from '@/lib/hooks/post';

type Post = {
	id: any;
};

type Posts = Post[];

export default function Home() {
	const [query, setQuery] = useState('');
	const [page, setPageNumber] = useState(1);
	
	const [posts, loading] = usePost(page);
	
	function handleSearch(e: {
		target: { value: React.SetStateAction<string> };
	}) {
		setQuery(e.target.value);
		setPageNumber(1);
	}
	
	const observer = useRef<IntersectionObserver>();
	const lastBookElementRef = useCallback(
		(node: any) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					setPageNumber((prevPageNumber) => prevPageNumber + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading],
	);
	
	return (
		<>
			<Layout>
				<div className='post-container max-w-lg mx-auto'>
					{posts.map((post: Post): any => (
						<Post post={post} key={post.id} />
					))}
				</div>
			</Layout>
		</>
	);
}
