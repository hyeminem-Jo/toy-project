import { NextResponse } from 'next/server';

const DB = [
  {
    id: 1,
    name: 'David',
    email: 'david1111@example.com',
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
  {
    id: 4,
    name: 'David',
    email: 'david4444@example.com',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const filteredUser = DB.filter((user) => user.name === name);

  if (!filteredUser) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  return NextResponse.json({ users: filteredUser });
}
