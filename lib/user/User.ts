import { prisma } from '../prisma';
import redis from '../redis';

export default className User {
  public static async createNewIfNotExist(email: string) {
    // check if user exists in cache
    const user = await redis.get(email).then((response: any): any => response);

    return user;
  }
}
