import { type NextRequest, NextResponse } from 'next/server';

const allowedOrigins =
  process.env.NODE_ENV === 'production'
    ? ['http://www.mysite.com', 'https://mysite.com']
    : ['http://locahost:3000', 'https://www.google.com']; // for testing CORS

// This function can optionally be async.
export function middleware(request: NextRequest) {
  const { headers, method, nextUrl, url } = request;

  const origin = headers.get('origin');

  // method is GET, POST, PUT, or DELETE.
  // url is a string like "http://localhost:3000/api/dogs".
  // origin can be null or a string like "http://localhost:3000".
  // nextURL is a URL object w/ many properties.
  console.log('middleware:', method, url, 'from', origin);

  // This enforces CORS restrictions.
  // In production mode you may want to add "|| !origin"
  // to block access from tools like Postman or Thunder Client.
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: 'Bad Request',
    });
  }

  // Proceed to intended URL.
  return NextResponse.next();
}

// Only run the middleware for API requests.
export const config = {
  // Can specify an array of paths.
  // Each path can be a regular expression.
  matcher: '/api/:path*',
};
