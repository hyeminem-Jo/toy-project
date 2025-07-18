'use client';

import * as S from './styled';
import { useState } from 'react';
import { useIsMobile } from '@/app/_modules/common/hooks/useIsMobile';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name?: string;
  label?: string;
  required?: boolean;
  maxLength?: number;
  isLengthCount?: boolean;
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
  ref?: React.RefObject<HTMLInputElement>;
  color?: 'white' | 'black';
}

function Input({
  type = 'text',
  maxLength = 50,
  isLengthCount = true,
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
  ref,
  ...rest
}: InputProps) {
  const [isFocus, setIsFocus] = useState(false);
  const isMobile = useIsMobile();
  return (
    <S.InputFieldset $width={width}>
      <S.InputWrap>
        <S.Input
          id={id || name}
          name={name}
          type={type}
          value={value}
          maxLength={isLengthCount ? maxLength : undefined}
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
          ref={ref}
          {...rest}
        />
        {isSearch && (
          <S.InputSearch $color={color}>
            <i className='fa-solid fa-magnifying-glass'></i>
          </S.InputSearch>
        )}
      </S.InputWrap>
    </S.InputFieldset>
  );
}

export default Input;
