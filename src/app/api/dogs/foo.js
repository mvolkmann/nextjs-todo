import { NextResponse } from "next/server";

// This function Can optionally be async.
// The request parameter is optional.
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");

  const dogs = [
    { name: "Comet", breed: "whippet" },
    { name: "Maisey", breed: "Treeing Walker Coonhound" },
    { name: "Oscar", breed: "German Shorthaired Pointer" },
    { name: "Ramsay", breed: "Native American Indian Dog" },
  ];

  // If a "name" query parameter was supplied,
  // only return the matching dog.
  // Otherwise return an array of all the dogs.
  const dog = name ? dogs.find((d) => d.name === name) : null;
  return NextResponse.json(dog || dogs);
}
