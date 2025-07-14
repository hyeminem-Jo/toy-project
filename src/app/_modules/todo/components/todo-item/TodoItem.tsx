'use client';

import * as S from './styled';
import Checkbox from '@/app/_modules/common/components/form/checkbox/Checkbox';
import Input from '@/app/_modules/common/components/form/input/Input';
import IconButton from '@/app/_modules/common/components/button/icon-button/IconButton';
import { useState } from 'react';
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
  const [isChecked, setIsChecked] = useState(true);
  const [todoValue, setTodoValue] = useState(todo);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <S.TodoListItem key={index}>
      <S.TodoListItemWrap>
        <Checkbox
          id={`todo-item-checkbox-${index}`}
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
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
          isLineThrough={isChecked}
          // isReadonly
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
          <IconButton iconName='pen' onClick={() => {}} />
          <IconButton iconName='trash' onClick={() => onDeleteTodo?.(index)} />
        </S.TodoListItemIcons>
      </S.TodoListItemWrap2>
    </S.TodoListItem>
  );
};

export default TodoItem;
