import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({
    users: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
      },
      {
        id: 3,
        name: 'John Smith',
        email: 'john.smith@example.com',
      },
    ],
  });
}
