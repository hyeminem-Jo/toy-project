'use client';

import * as S from './styled';
import Checkbox from '@/app/_modules/common/components/form/checkbox/Checkbox';
import Input from '@/app/_modules/common/components/form/input/Input';
import IconButton from '@/app/_modules/common/components/button/icon-button/IconButton';
import { useFormContext } from 'react-hook-form'; // ✅ 여기!

const TodoItem = ({ index, todo }: { index: number; todo: string }) => {
  const { control } = useFormContext();

  return (
    <S.TodoListItem key={index}>
      <S.TodoListItemWrap>
        <Checkbox control={control} name={`todo-check-${index}`} />
        <Input
          control={control}
          name={`todo-${index}`}
          onChange={() => {}}
          isUnderline
          isReadonly
          // isLineThrough
        />
      </S.TodoListItemWrap>

      <S.TodoListItemIcons>
        <IconButton iconName='pen' onClick={() => {}} />
        <IconButton iconName='trash' onClick={() => {}} />
      </S.TodoListItemIcons>
    </S.TodoListItem>
  );
};

export default TodoItem;
