import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export class RedisService {
  static async get<T = any>(key: string): Promise<T | null> {
    const data = await redis.get(key);
    return data ? (data as T) : null;
  }

  static async set<T = any>(
    key: string,
    value: T,
    expirationSeconds?: number
  ): Promise<void> {
    if (expirationSeconds) {
      await redis.set(key, value, { ex: expirationSeconds });
    } else {
      await redis.set(key, value);
    }
  }

  static async del(key: string): Promise<void> {
    await redis.del(key);
  }

  static async exists(key: string): Promise<boolean> {
    const result = await redis.exists(key);
    return result === 1;
  }

  static async flushAll(): Promise<void> {
    console.warn("⚠️ flushAll no soportado en Upstash Redis REST API");
  }
}
