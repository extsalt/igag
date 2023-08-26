export type Post = {
	id: string,
	title: string,
	slug: string,
	body: string,
	likeCount: bigint,
	dislikeCount: bigint,
	commentCount: bigint,
	originalImage: string,
	createdAt: string
	user: {
		avatar: string,
		username: string
	}
};

export type Posts = Post[];

export interface CloudinarySignature {
	signature: string,
	timestamp: string,
	apiKey: string
}

export interface PulsarErrorResponse {
	message: string;
}

export interface PostComponentProps {
	post: Post,
	key: string
}

export type PostsFetcherResponse = Promise<Posts | void>;

export type PostsFetcher = () => PostsFetcherResponse;

export type PostLikeCount = number;
export type PostDislikeCount = number;
