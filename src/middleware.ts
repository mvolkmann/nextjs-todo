import { type NextRequest, NextResponse } from 'next/server';

// The allowed origins differ based on whether
// we are running in production or development mode.
// We can test access from google.com in development mode
// by browsing that site and sending requests from the DevTools Console.
// To this, enter the following:
// const res = await fetch('http://localhost:3000/api/dogs')
// console.log(await res.json())
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
  // url is a string like "http://localhost:3000/api/dogs".
  // origin can be null or a string like "http://localhost:3000".
  console.log('middleware:', method, url, 'from', origin);

  // nextURL is a URL object w/ many properties.
  // console.log('middleware: nextUrl =', nextUrl);

  // This enforces CORS restrictions.
  // In production mode you may want to add "|| !origin"
  // to block access from tools like Postman or Thunder Client.
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
// including requests for static assets (like images),
// requests for client-side files, and API requests.
// The exported config object restricts the requests
// for which this middleware will run.
// Here we only want to run the middleware for API requests.
export const config = {
  // Can specify an array of paths.
  // Each path can be a regular expression.
  matcher: '/api/:path*',
};
