'use client';

import * as S from './styled';
import { useState } from 'react';
import { useIsMobile } from '@/app/_modules/common/hooks/useIsMobile';
import { Ref } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name?: string;
  label?: string;
  required?: boolean;
  maxLength?: number;
  type?: 'text' | 'password';
  width?: number;
  isSearch?: boolean;
  isUnderline?: boolean;
  isReadonly?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  isLineThrough?: boolean;
  inputRef?: Ref<HTMLInputElement>;
  color?: 'white' | 'black';
  error?: string;
}

function Input({
  type = 'text',
  maxLength = 50,
  placeholder = '',
  onChange,
  onBlur,
  onFocus,
  disabled,
  width,
  isSearch = false,
  isUnderline = false,
  isReadonly = false,
  value = '',
  id,
  name,
  isLineThrough = false,
  color = 'white',
  inputRef,
  label,
  required,
  error,
  ...rest
}: InputProps) {
  const [isFocus, setIsFocus] = useState(false);
  const isMobile = useIsMobile();
  return (
    <S.InputFieldset $width={width}>
      <S.InputWrap>
        {/* {label && (
          <label htmlFor={id || name}>
            {label}
            {required && ' *'}
          </label>
        )} */}
        <S.Input
          id={id || name}
          name={name}
          type={type}
          value={value}
          maxLength={maxLength || undefined}
          $isFocus={isFocus}
          $isReadonly={isReadonly}
          $isUnderline={isUnderline}
          onChange={onChange}
          onBlur={(e) => {
            onBlur?.(e);
            setIsFocus(false);
          }}
          onFocus={(e) => {
            onFocus?.(e);
            setIsFocus(true);
          }}
          placeholder={placeholder}
          disabled={disabled || isReadonly}
          $isLineThrough={isLineThrough && isReadonly}
          $color={color}
          ref={inputRef}
          {...rest}
        />
        {isSearch && (
          <S.InputSearch $color={color}>
            <i className='fa-solid fa-magnifying-glass'></i>
          </S.InputSearch>
        )}
      </S.InputWrap>
      {error && <S.InputError>{error}</S.InputError>}
    </S.InputFieldset>
  );
}

export default Input;
