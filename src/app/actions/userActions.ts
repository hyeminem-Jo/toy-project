'use server';

export async function searchUsers(name: string) {
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

  // const response = await fetch(`/api/users?name=${name}`);
  // const data = await response.json();
  const filteredUser = DB.filter((user) => user.name === name);
  return filteredUser;
}
