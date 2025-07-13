'use client';

import React, { useState } from 'react';
import * as S from './styled';
import Link from 'next/link';
import { useAtomValue } from 'jotai';
import { userState } from '@/app/store';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createTodo, getTodos } from '@/app/actions/todoActions';
import { queryClient } from '@/app/config/ReactQueryProvider';

const TodoContainer = () => {
  const [todoInput, setTodoInput] = useState('');

  const todosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    // queryFn: () => getTodos(),
  });

  const createTodoMutation = useMutation({
    mutationFn: async () => {
      if (todoInput === '') throw new Error('Todo is required');
      await createTodo(todoInput);
    },
    onSuccess: (TODOS) => {
      // createTodo(todoInput) 의 리턴값
      todosQuery.refetch();

      // ⬇️ 다른 페이지에서 쿼리 데이터 갱신시, queryClient 를 통해 캐시 데이터 갱신
      // queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
    onError: (error: any) => {
      alert(error.message);
    },
  });

  const user = useAtomValue(userState);
  return (
    <S.TodoListContainer>
      <S.TodoListContent>
        <h1>TodoList</h1>
        <input
          type='text'
          placeholder='Enter Todo'
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={() => createTodoMutation.mutate()}>Add Todo</button>
        <ul>
          {todosQuery?.data &&
            todosQuery?.data?.map((todo: string, index: number) => <li key={index}>{todo}</li>)}
        </ul>
        {todosQuery.isLoading && <p>Loading...</p>}
        {createTodoMutation.isPending && <p>Adding Todo...</p>}
        {todosQuery.isError && <p>Error: {todosQuery.error.message}</p>}
        {/* <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <Link href='/'>Go to Main Page</Link> */}
        {/* Link 는 서버사이드로 redirect 되는게 아닌, 클라이언트 라우팅으로 동작 */}
      </S.TodoListContent>
    </S.TodoListContainer>
  );
};

export default TodoContainer;
