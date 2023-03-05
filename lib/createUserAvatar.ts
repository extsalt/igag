const crypto = require('crypto');

export default function createUserAvatar(email: string) {
  const emailToLowerCase = email.toLocaleLowerCase();

  let avatar = 'https://seccdn.libravatar.org/avatar';

  if (emailToLowerCase) {
    avatar = 'https://seccdn.libravatar.org/avatar/'
      + crypto.createHash('md5', emailToLowerCase)
        .digest('hex');
  }

  return avatar;
}