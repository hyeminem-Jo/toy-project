'use server';

var TODOS: string[] = ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4', 'Todo 5'];

export const getTodos = async () => {
  return TODOS;
};

export const createTodo = async (data: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  TODOS.push(data);
  return TODOS;
};

// export const deleteTodo = async (index: number) => {
//   TODOS.splice(index, 1);
//   return TODOS;
// };

// export const updateTodo = async (index: number, data: string) => {
//   TODOS[index] = data;
//   return TODOS;
// };
