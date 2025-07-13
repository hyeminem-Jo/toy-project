'use client';

import React from 'react';
import { useAtom } from 'jotai';
import { userState } from '@/app/store';
import Link from 'next/link';

const UserUpdatePage = () => {
  const [user, setUser] = useAtom(userState);
  console.log(user);

  return (
    <div>
      <h1>Update User Page</h1>
      <input
        type='text'
        value={user.name}
        placeholder='Enter Your Name'
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type='email'
        value={user.email}
        placeholder='Enter Your Email'
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button onClick={() => setUser({ ...user, name: 'David', email: 'david@example.com' })}>
        Update
      </button>
      <Link href='/todo-list'>Go to Todo List Page</Link>
    </div>
  );
};

export default UserUpdatePage;
