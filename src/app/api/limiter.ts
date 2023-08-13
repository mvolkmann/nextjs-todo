import { RateLimiter } from 'limiter';
import { NextResponse } from 'next/server';

const limiter = new RateLimiter({
  fireImmediately: true,
  interval: 'min',
  tokensPerInterval: 8,
});

export async function getLimitedResponse(
  request: Request,
): Promise<NextResponse | null> {
  const remaining = await limiter.removeTokens(1);
  console.info('limiter.ts: remaining =', remaining);
  if (remaining >= 0) return null; // allow request

  // Reject request.
  const origin = request.headers.get('origin');
  return new NextResponse(null, {
    status: 429,
    statusText: 'Too Many Requests',
    headers: {
      // '*' allows tools like Postman and Thunder Client to send requests.
      'Access-Control-Allow-Origin': origin || '*',
      'Content-Type': 'text/plain',
    },
  });
}
