const Redis = require('ioredis');
import { redisConfig } from '@/configs/services';

const redis = new Redis(redisConfig);

export default redis;