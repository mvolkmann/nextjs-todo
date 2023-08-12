import { NextResponse } from 'next/server';
import { deleteDog, getDog, type Dog } from '../dogs';

type Props = {
  params: { name: string };
};

export async function DELETE(request: Request, { params: { name } }: Props) {
  const result = deleteDog(name);
  const status = result ? 200 : 404;
  return NextResponse.json(null, { status });
}

export function GET(request: Request, { params: { name } }: Props) {
  const dog = getDog(name);
  if (dog) {
    return NextResponse.json(dog);
  } else {
    return NextResponse.json(null, { status: 404 });
  }
}
