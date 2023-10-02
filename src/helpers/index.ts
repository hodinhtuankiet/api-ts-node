import crypto from 'crypto';

const SECRET = 'HODINHTUANKIET-REST-API';

export const random = () => crypto.randomBytes(128).toString('base64');

export const authentication = (salt: string, password: string) => {
  const hmac = crypto.createHmac('sha256', salt);
  hmac.update(SECRET);
  return hmac.digest('hex');
};
