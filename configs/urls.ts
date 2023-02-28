import { server } from './index';

export const OAUTH_SIGN_IN_REDIRECT_URL = server + '/users/oauth/';
export const USER_CREATE_URL = server + '/api/users/store';
export const USER_OAUTH_CREATE_URL = server + '/api/users/oauth/store';