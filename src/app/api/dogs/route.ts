import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { jsonCorsResponse } from '@app/api/cors';
import { getLimitedResponse } from '@app/api/limiter';
import { type Dog } from '@lib/dogs-api';
import { createDog, getDogs, updateDog } from './dogs';

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
  createDog(dog);
  // revalidatePath('/dogs');

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
    // revalidatePath('/dogs');
    return NextResponse.json(dog);
  } else {
    return NextResponse.json(null, { status: 404 });
  }
}
