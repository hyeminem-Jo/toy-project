'use client';

import { useController, Control, FieldValues, Path } from 'react-hook-form';
import * as S from './styled';

interface CheckboxProps<T extends FieldValues = FieldValues>
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  required?: boolean;
  width?: number;
}

function Checkbox<T extends FieldValues = FieldValues>({
  control,
  name,
  label = '',
  required = false,
  width,
  onChange = () => {},
  disabled,
  ...rest
}: CheckboxProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const isChecked = field.value === true || field.value === 'true';

  return (
    <S.CheckboxFieldset>
      <S.CheckboxWrap $width={width}>
        <S.CheckboxInput
          id={name}
          name={name}
          type='checkbox'
          checked={isChecked}
          $error={!!error?.message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e);
            field.onChange(e.target.checked);
          }}
          ref={field.ref}
          disabled={disabled}
          {...rest}
        />
        <S.CustomCheckbox $isChecked={isChecked} $error={!!error?.message}>
          <i className='fa-solid fa-check'></i>
        </S.CustomCheckbox>
        <S.CheckboxLabel htmlFor={name}>
          {label}
          {required && <S.RequiredMark>*</S.RequiredMark>}
        </S.CheckboxLabel>
      </S.CheckboxWrap>
      {error?.message && <S.ErrorMessage color='system.red_500'>{error.message}</S.ErrorMessage>}
    </S.CheckboxFieldset>
  );
}

export default Checkbox;
