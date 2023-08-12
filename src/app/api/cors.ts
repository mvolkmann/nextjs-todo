import { NextResponse } from 'next/server';

export function jsonCorsResponse(
  request: Request,
  object: Object | null,
  status: number = 200,
): NextResponse {
  const origin = request.headers.get('origin');
  const body = object ? JSON.stringify(object) : '';
  return new NextResponse(body, {
    headers: {
      // '*' allows tools like Postman and Thunder Client to send requests.
      'Access-Control-Allow-Origin': origin || '*',
      'Content-Type': 'application/json',
    },
    status,
  });
}
