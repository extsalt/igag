import { Post } from '@/types';

/**
 * Returns posts for given page number
 * @param page
 */
export function usePost(page: number): [Array<Post>, boolean] {
	return [[], true];
}
