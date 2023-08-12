import { NextResponse } from 'next/server';
import { addDog, getDogs, updateDog, type Dog } from './dogs';

export function GET(request: Request) {
  const dogs = getDogs();
  return NextResponse.json(dogs);
}

export async function POST(request: Request) {
  const dog: Dog = await request.json();
  addDog(dog);
  return NextResponse.json(dog);
}

export async function PUT(request: Request) {
  const dog: Dog = await request.json();
  const result = updateDog(dog);
  if (result) {
    return NextResponse.json(dog);
  } else {
    return NextResponse.json(null, { status: 404 });
  }
}
