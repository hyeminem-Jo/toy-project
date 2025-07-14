'use client';

import * as S from './styled';
import Checkbox from '@/app/_modules/common/components/form/checkbox/Checkbox';
import Input from '@/app/_modules/common/components/form/input/Input';
import IconButton from '@/app/_modules/common/components/button/icon-button/IconButton';
import { useEffect, useRef, useState } from 'react';
import CustomDatePicker from '@/app/_modules/common/components/date-picker/CustomDatePicker';

const TodoItem = ({
  index,
  todo,
  onUpdateTodo,
  onDeleteTodo,
  onToggleCheck,
}: {
  index: number;
  todo: string;
  onUpdateTodo?: (index: number, value: string) => void;
  onDeleteTodo?: (index: number) => void;
  onToggleCheck?: (index: number, checked: boolean) => void;
}) => {
  const [isCompleted, setIsCompleted] = useState(true);
  const [todoValue, setTodoValue] = useState(todo);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); // ✅ 1. ref 생성

  useEffect(() => {
    if (isEdit) {
      inputRef.current?.focus();
    }
  }, [isEdit]);

  return (
    <S.TodoListItem key={index}>
      <S.TodoListItemWrap>
        <Checkbox
          id={`todo-item-checkbox-${index}`}
          checked={isCompleted}
          onChange={(e) => {
            setIsCompleted(e.target.checked);
            onToggleCheck?.(index, e.target.checked);
          }}
        />
        <Input
          id={`todo-item-${index}`}
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
            onUpdateTodo?.(index, e.target.value);
          }}
          isUnderline
          isLineThrough={isCompleted && !isEdit}
          isReadonly={!isEdit}
          ref={inputRef}
        />
      </S.TodoListItemWrap>
      <S.TodoListItemWrap2>
        <S.TodoListItemWrapDate>
          <S.TodoListItemWrapText>⏰ 마감일:</S.TodoListItemWrapText>{' '}
          <CustomDatePicker
            id={`todo-item-date-${index}`}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </S.TodoListItemWrapDate>
        <S.TodoListItemIcons>
          {isEdit ? (
            <IconButton
              iconName='check'
              onClick={() => {
                setIsEdit(false);
                onUpdateTodo?.(index, todoValue);
              }}
            />
          ) : (
            <IconButton iconName='pen' onClick={() => setIsEdit(true)} />
          )}
          <IconButton iconName='trash' onClick={() => onDeleteTodo?.(index)} />
        </S.TodoListItemIcons>
      </S.TodoListItemWrap2>
    </S.TodoListItem>
  );
};

export default TodoItem;
