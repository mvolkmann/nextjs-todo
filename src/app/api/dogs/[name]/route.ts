import { NextResponse } from 'next/server';
import { deleteDog, getDog, type Dog } from '../dogs';
import { getLimitedResponse } from '@/app/api/limiter';

type Props = {
  params: { name: string };
};

export async function DELETE(request: Request, { params: { name } }: Props) {
  const response = getLimitedResponse(request);
  if (response) return response;

  const result = deleteDog(name);
  const status = result ? 200 : 404;
  return NextResponse.json(null, { status });
}

export function GET(request: Request, { params: { name } }: Props) {
  const response = getLimitedResponse(request);
  if (response) return response;

  const dog = getDog(name);
  if (dog) {
    return NextResponse.json(dog);
  } else {
    return NextResponse.json(null, { status: 404 });
  }
}
