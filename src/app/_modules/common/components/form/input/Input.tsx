'use client';

import { useController, Control, FieldValues, RegisterOptions, Path } from 'react-hook-form';
import * as S from './styled';
import { useState } from 'react';
import { useIsMobile } from '@/app/_modules/common/hooks/useIsMobile';
import IconButton from '../../button/icon-button/IconButton';

interface InputProps<T extends FieldValues = FieldValues>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
  label?: string;
  required?: boolean;
  maxLength?: number;
  isLengthCount?: boolean;
  type?: 'text' | 'password';
  width?: number;
  isSearch?: boolean;
  isUnderline?: boolean;
  isReadonly?: boolean;
}

function Input<T extends FieldValues = FieldValues>({
  control,
  name,
  rules, // form 필드의 갯수가 많지 않을 땐 yup 대신 rules 로 사용 가능
  type = 'text',
  // label = '',
  maxLength = 20,
  isLengthCount = true,
  placeholder = '',
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  disabled,
  width,
  isSearch = false,
  isUnderline = false,
  isReadonly = false,
  ...rest
}: InputProps<T>) {
  const [isFocus, setIsFocus] = useState(false);
  const isMobile = useIsMobile();

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  const inputValue = field.value === undefined ? '' : field.value;
  return (
    <S.InputFieldset>
      {/* {label && <label htmlFor={name}>{label}</label>} */}
      <S.InputWrap $width={width}>
        <S.Input
          id={name}
          name={name}
          type={type}
          value={inputValue}
          maxLength={isLengthCount ? maxLength : undefined}
          $error={!!error?.message}
          $isFocus={isFocus}
          $isReadonly={isReadonly}
          $isUnderline={isUnderline}
          onChange={(e) => {
            onChange?.(e);
            field.onChange(e);
          }}
          ref={field.ref}
          onBlur={(e) => {
            onBlur?.(e);
            field.onBlur();
            setIsFocus(false);
          }}
          onFocus={(e) => {
            onFocus?.(e);
            setIsFocus(true);
          }}
          placeholder={placeholder}
          disabled={disabled || isReadonly}
          {...rest}
        />
        {isSearch && (
          <S.InputSearchIcon className='fa-solid fa-magnifying-glass'></S.InputSearchIcon>
        )}
        {/* <S.InputInfo>
          {isLengthCount && maxLength > 0 && (
            <S.InputLength
              $isFocus={isFocus}
              $isFilled={inputValue.length !== 0}
              $error={!!error?.message}
            >
              <span>{inputValue.length}</span> / {maxLength}
            </S.InputLength>
          )}
        </S.InputInfo> */}
      </S.InputWrap>
      {error?.message && <S.ErrorMessage color='system.red_500'>{error.message}</S.ErrorMessage>}
    </S.InputFieldset>
  );
}

export default Input;
