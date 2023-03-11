import Redis, { RedisOptions } from 'ioredis';
import { redisConfig } from '@/configs/services';

const redisOptions: RedisOptions = {
  username: redisConfig.username,
  password: redisConfig.password,
};

const redis = new Redis(redisConfig.port, redisConfig.host, redisOptions);

export default redis;