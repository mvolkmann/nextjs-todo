import { type NextRequest, NextResponse } from 'next/server';

const allowedOrigins =
  process.env.NODE_ENV === 'production'
    ? ['http://www.mysite.com', 'https://mysite.com']
    : ['http://locahost:3000', 'https://www.google.com']; // for testing CORS

// This file belongs in the root of the project (src directory).
// Can there only be one middleware?
// This function can be marked `async` if using `await` inside
// This function can be async.
export function middleware(request: NextRequest) {
  const { headers, method, nextUrl, url } = request;
  // const { origin } = nextUrl;
  const origin = headers.get('origin');

  // method is GET, POST, PUT, or DELETE.
  console.log('middleware: method =', method);

  // nextURL is a URL object w/ many properties.
  console.log('middleware: nextUrl =', nextUrl);

  // Origin can be null or a string like "http://localhost:3000".
  console.log('middleware: origin =', origin);

  // URL is a string like "http://localhost:3000/api/dogs".
  console.log('middleware: url =', url);

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: 'Bad Request',
      headers: { 'Content-Type': 'text/plain' }, // TODO: needed?
    });
  }

  // Can access and set cookies.
  // Can add request headers.
  // Can return a response and bypass the intended URL.
  // Can redirect to a different URL.
  // return NextResponse.redirect(new URL('/home', request.url));
  return NextResponse.next();
}

// By default this middleware runs for every request
// including request for static assets (like images),
// client-side files, and APIs.
// The exported config object restricts the requests
// for which this middleware will run.
export const config = {
  // Can specify an array of paths.
  // Each path can be a regular expression.
  matcher: '/api/:path*',
};
