import { NextResponse } from 'next/server';

type Dog = {
  name: string;
  breed: string;
};

let dogs: Dog[] = [
  { name: 'Comet', breed: 'whippet' },
  { name: 'Maisey', breed: 'Treeing Walker Coonhound' },
  { name: 'Oscar', breed: 'German Shorthaired Pointer' },
  { name: 'Ramsay', breed: 'Native American Indian Dog' },
];

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  if (!name) {
    return NextResponse.json('name is required', { status: 400 });
  }

  const dog = dogs.find((d) => d.name === name);
  if (!dog) {
    return NextResponse.json({}, { status: 404 });
  }

  dogs = dogs.filter((d) => d.name !== name);
  return NextResponse.json({});
}

// This function Can optionally be async.
// The request parameter is optional.
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  // If a "name" query parameter was supplied,
  // only return the matching dog.
  // Otherwise return an array of all the dogs.
  if (name) {
    const dog = dogs.find((d) => d.name === name);
    if (dog) {
      return NextResponse.json(dog || dogs);
    } else {
      return NextResponse.json({}, { status: 404 });
    }
  } else {
    return NextResponse.json(dogs);
  }
}

export async function POST(request: Request) {
  const dog: Dog = await request.json();
  dogs.push(dog);
  return NextResponse.json(dog);
}

export async function PUT(request: Request) {
  const dog: Dog = await request.json();
  const index = dogs.findIndex((d) => d.name === dog.name);
  if (index === -1) {
    return NextResponse.json({}, { status: 404 });
  }
  dogs[index] = dog;
  return NextResponse.json(dog);
}
