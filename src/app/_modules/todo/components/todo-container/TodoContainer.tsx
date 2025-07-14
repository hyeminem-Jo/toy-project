'use client';

import React, { useEffect, useState } from 'react';
import * as S from './styled';
import Link from 'next/link';
import { useAtomValue } from 'jotai';
import { userState } from '@/app/store';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createTodo, getTodos } from '@/app/actions/todoActions';
import { queryClient } from '@/app/config/ReactQueryProvider';
import Input from '@/app/_modules/common/components/form/input/Input';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '@/app/_modules/common/components/button/button/Button';
import TodoItem from '../todo-item/TodoItem';

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

  // const defaultValues = todosQuery?.data?.reduce((acc, todo, index) => {
  //   acc[`todo-${index}`] = todo;
  //   acc[`todo-check-${index}`] = false;
  //   return acc;
  // }, {} as Record<string, any>);

  // console.log(defaultValues);

  const user = useAtomValue(userState);

  const methods = useForm();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
    createTodoMutation.mutate();
  };

  useEffect(() => {
    if (todosQuery?.data && todosQuery?.data.length > 0) {
      const defaultValues = todosQuery?.data.reduce((acc, todo, index) => {
        acc[`todo-${index}`] = todo;
        acc[`todo-check-${index}`] = true;
        return acc;
      }, {} as Record<string, any>);

      reset(defaultValues); // ✅ 여기서 초기값 설정
    }
  }, [todosQuery?.data, reset]);

  return (
    <FormProvider {...methods}>
      <S.TodoContainer>
        <S.TodoTitle>나의 할 일 ✅</S.TodoTitle>
        <S.TodoContent>
          <Input control={control} name='newTodo' placeholder='Enter Todo' isSearch />

          {/* <IconButton iconName='plus' /> */}
          <S.TodoList>
            {todosQuery?.data &&
              todosQuery?.data?.map((todo: string, index: number) => (
                <TodoItem key={index} index={index} todo={todo} />
              ))}
          </S.TodoList>

          <Button
            type='submit'
            text='추가하기'
            iconName='plus'
            filled
            onClick={handleSubmit(onSubmit)}
          />
          {todosQuery.isLoading && <p>Loading...</p>}
          {createTodoMutation.isPending && <p>Adding Todo...</p>}
          {todosQuery.isError && <p>Error: {todosQuery.error.message}</p>}

          {/* <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <Link href='/'>Go to Main Page</Link> */}
          {/* Link 는 서버사이드로 redirect 되는게 아닌, 클라이언트 라우팅으로 동작 */}
        </S.TodoContent>
      </S.TodoContainer>
    </FormProvider>
  );
};

export default TodoContainer;
