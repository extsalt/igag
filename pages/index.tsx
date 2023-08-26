import React, { useState, useRef, useCallback, useEffect } from 'react';

import PostComponent from '@/components/posts/post';
import Layout from '@/components/layouts/layout';
import { usePost } from '@/lib/hooks/post';
import { Post } from '@/types';

export default function Home() {
	const [page, setPageNumber] = useState(1);
	const [fetchPosts, posts, error, loading] = usePost(page);
	useEffect(() => {
		fetchPosts();
	}, []);
	
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
	
	if (loading) {
		return <>Loading...</>;
	}
	
	if (error) {
		return <>Error</>;
	}
	
	return (
		<>
			<Layout>
				<div className='post-container max-w-lg mx-auto'>
					{posts.map((post: Post): any => (
						<PostComponent post={post} key={post.id} />
					))}
				</div>
			</Layout>
		</>
	);
}