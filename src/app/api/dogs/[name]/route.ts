import { NextResponse } from 'next/server';
import { deleteDog, getDog, type Dog } from '../dogs';
import { jsonCorsResponse } from '@/app/api/cors';
import { getLimitedResponse } from '@/app/api/limiter';

type Props = {
  params: { name: string };
};

export async function DELETE(request: Request, { params: { name } }: Props) {
  const response = await getLimitedResponse(request);
  if (response) return response;

  const result = deleteDog(name);
  const status = result ? 200 : 404;
  // This approach works when we don't need to configure CORS.
  //return NextResponse.json(null, { status });
  return jsonCorsResponse(request, null, status);
}

export async function GET(request: Request, { params: { name } }: Props) {
  const response = await getLimitedResponse(request);
  if (response) return response;

  const dog = getDog(name);
  if (dog) {
    // This approach works when we don't need to configure CORS.
    //return NextResponse.json(dog);
    return jsonCorsResponse(request, dog);
  } else {
    // This approach works when we don't need to configure CORS.
    //return NextResponse.json(null, { status: 404 });
    return jsonCorsResponse(request, null, 404);
  }
}
