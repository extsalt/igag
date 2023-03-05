import { server } from './index';

export const GET_USERS = server + '/api/users';
export const POST_STORE_URL = server + '/api/posts/store';
export const POST_GET_URL = server + '/api/posts';
export const CLOUDINARY_GET_SIGNATURE = server + '/api/signature';
export const USER_PROFILE_IMAGE_ULR = server + '/api/users/profile/changeImage';