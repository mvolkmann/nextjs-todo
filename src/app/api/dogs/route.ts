import { NextResponse } from 'next/server';
import { addDog, getDogs, updateDog, type Dog } from './dogs';
import { jsonCorsResponse } from '@/app/api/cors';
import { getLimitedResponse } from '@/app/api/limiter';

export async function GET(request: Request) {
  const response = await getLimitedResponse(request);
  if (response) return response;

  const dogs = getDogs();

  // This approach works when we don't need to configure CORS.
  //return NextResponse.json(dogs);
  return jsonCorsResponse(request, dogs);
}

export async function POST(request: Request) {
  const response = await getLimitedResponse(request);
  if (response) return response;

  const dog: Dog = await request.json();
  addDog(dog);

  // This approach works when we don't need to configure CORS.
  //return NextResponse.json(dog);
  return jsonCorsResponse(request, dog);
}

export async function PUT(request: Request) {
  const response = await getLimitedResponse(request);
  if (response) return response;

  const dog: Dog = await request.json();
  const result = updateDog(dog);
  if (result) {
    return NextResponse.json(dog);
  } else {
    return NextResponse.json(null, { status: 404 });
  }
}
