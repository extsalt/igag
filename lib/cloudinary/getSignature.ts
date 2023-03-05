import { CLOUDINARY_GET_SIGNATURE } from '@/configs/apis';

export default async function getSignature() {
  return fetch(CLOUDINARY_GET_SIGNATURE).then((response) => response.json());
}
