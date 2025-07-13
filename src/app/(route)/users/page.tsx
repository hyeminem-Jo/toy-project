'use client';

import React, { useEffect, useState } from 'react';
import { searchUsers } from '@/app/actions/userActions';

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    searchUsers('David').then((data) => setUsers(data));
  }, []);

  return (
    <main>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))}
    </main>
  );
};

export default UsersPage;
