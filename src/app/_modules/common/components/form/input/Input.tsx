'use client';

import * as S from './styled';
import { useState } from 'react';
import { useIsMobile } from '@/app/_modules/common/hooks/useIsMobile';
import IconButton from '../../button/icon-button/IconButton';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
  ref,
  ...rest
}: InputProps) {
  const [isFocus, setIsFocus] = useState(false);
  const isMobile = useIsMobile();
  return (
    <S.InputFieldset>
      <S.InputWrap $width={width}>
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
          ref={ref}
          {...rest}
        />
        {isSearch && (
          <S.InputSearchButton>
            <i className='fa-solid fa-magnifying-glass'></i>
          </S.InputSearchButton>
        )}
      </S.InputWrap>
    </S.InputFieldset>
  );
}

export default Input;
