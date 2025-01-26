import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.UPSTASH_REDIS_REST_TOKEN || "",
})

// Create a new ratelimiter that allows 5 requests per 60 seconds
export const rateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "60s"),
  analytics: true,
})

