import { NextResponse } from 'next/server';
import { addDog, getDogs, updateDog, type Dog } from './dogs';
import { getLimitedResponse } from '@/app/api/limiter';

export async function GET(request: Request) {
  const response = getLimitedResponse(request);
  if (response) return response;

  const dogs = getDogs();

  // This simple approach works when we don't need to configure CORS.
  //return NextResponse.json(dogs);

  // This approach is needed to configure CORS.
  console.log('route.ts GET: request =', request);
  const origin = request.headers.get('origin');
  return new NextResponse(JSON.stringify(dogs), {
    headers: {
      // '*' allows tools like Postman and Thunder Client to send requests.
      'Access-Control-Allow-Origin': origin || '*',
      'Content-Type': 'application/json',
    },
  });
}

export async function POST(request: Request) {
  const response = getLimitedResponse(request);
  if (response) return response;

  const dog: Dog = await request.json();
  addDog(dog);
  return NextResponse.json(dog);
}

export async function PUT(request: Request) {
  const response = getLimitedResponse(request);
  if (response) return response;

  const dog: Dog = await request.json();
  const result = updateDog(dog);
  if (result) {
    return NextResponse.json(dog);
  } else {
    return NextResponse.json(null, { status: 404 });
  }
}
