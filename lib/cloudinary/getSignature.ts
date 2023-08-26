import { CLOUDINARY_GET_SIGNATURE } from '@/configs/apis';
import { CloudinarySignature, PulsarErrorResponse } from '@/types';

export default async function getSignature(): Promise<CloudinarySignature | PulsarErrorResponse> {
	return fetch(CLOUDINARY_GET_SIGNATURE, {
		credentials: 'include',
	}).then((response) => response.json());
}
