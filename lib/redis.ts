const Redis = require('ioredis');
import { redisConfig } from '@/configs/services';

export default new Redis(redisConfig);
