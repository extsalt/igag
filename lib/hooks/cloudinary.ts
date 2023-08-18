import { useState } from 'react';
import { CLOUDINARY_GET_SIGNATURE } from '@/configs/apis';
import { CloudinarySignature } from '@/types';

export function useCloudinarySignature(): [string, boolean] {
	const [signature, setSignature] = useState('');
	const [error, setError] = useState(false);
	fetch(CLOUDINARY_GET_SIGNATURE).then((response: Response) => {
		if (response.ok) {
			return response.json();
		}
		throw new Error('Could not get signature');
	}).then((value: CloudinarySignature) => setSignature(value.signature))
		.catch((err: any) => setError(true));
	return [signature, error];
}