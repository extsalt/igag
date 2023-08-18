export type Post = {
	id: any;
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