import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Hyejin's Side Project - Home",
  description: "Hyejin's Side Project - Home 입니다.",
};

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <i className='fa-solid fa-house'></i>
      <Link href='/users'>Users</Link>
      <Link href='/todo'>Todo List</Link>
      <Link href='/todo/1'>Todo List Detail</Link>
      <Link href='/instagram'>Instagram</Link>
    </main>
  );
}
