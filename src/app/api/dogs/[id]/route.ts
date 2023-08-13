import { revalidatePath } from 'next/cache';
import { jsonCorsResponse } from '@/app/api/cors';
import { getLimitedResponse } from '@/app/api/limiter';
import { deleteDog, getDog } from '../dogs';

type Props = {
  params: { id: string };
};

export async function DELETE(request: Request, { params: { id } }: Props) {
  const response = await getLimitedResponse(request);
  if (response) return response;

  const result = await deleteDog(Number(id));
  // revalidatePath('/dogs');
  const status = result ? 200 : 404;
  // This approach works when we don't need to configure CORS.
  //return NextResponse.json(null, { status });
  return jsonCorsResponse(request, null, status);
}

export async function GET(request: Request, { params: { id } }: Props) {
  const response = await getLimitedResponse(request);
  if (response) return response;

  const dog = getDog(Number(id));
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
