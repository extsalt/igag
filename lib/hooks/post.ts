import { PostDislikeCount, PostLikeCount, Posts } from '@/types';
import { useState } from 'react';
import { POST_DISLiKE_URL, POST_GET_URL, POST_LIKE_URL } from '@/configs/apis';

/**
 * Returns posts for given page number
 * @param page
 * @return Array[() => void, boolean, boolean]
 */
export function usePost(page: number): [() => void, Posts, boolean, boolean] {
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [posts, setPosts] = useState<Posts>([]);
	const fetcher = () => {
		setLoading(true);
		fetch(POST_GET_URL, {
			credentials: 'include',
		}).then((response: Response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error();
		}).then((posts: Posts) => setPosts(posts))
			.catch((error: any) => setError(true))
			.finally(() => setLoading(false));
	};
	return [fetcher, posts, error, loading];
}

/**
 * Returns a function which likes a post
 * @param postID
 */
export function useLikePost(postID: string): [() => void, PostLikeCount, boolean, boolean] {
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [count, setCount] = useState<PostLikeCount>(0);
	const postLikerFunc = () => {
		const endpoint = POST_LIKE_URL.replace('{postID}', postID);
		setLoading(true);
		fetch(endpoint, {
			credentials: 'include',
			method: 'PUT',
		})
			.then((response: Response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error();
			})
			.then((count: PostLikeCount) => setCount(count))
			.catch((error: any) => setError(true))
			.finally(() => setLoading(false));
	};
	return [postLikerFunc, count, error, loading];
}

export function useDislikePost(postID: string): [() => void, PostDislikeCount, boolean, boolean] {
	const [error, setError] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [count, setCount] = useState<PostDislikeCount>(0);
	const postDislikeFunc = () => {
		const endpoint = POST_DISLiKE_URL.replace('{postID}', postID);
		setLoading(true);
		fetch(endpoint, {
			credentials: 'include',
			method: 'PUT',
		})
			.then((response: Response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error();
			})
			.then((count: PostDislikeCount) => setCount(count))
			.catch((error: any) => setError(true))
			.finally(() => setLoading(false));
	};
	return [postDislikeFunc, count, error, loading];
}