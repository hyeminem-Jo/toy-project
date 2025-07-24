import styled from '@emotion/styled';
import { css } from '@emotion/react';

type ButtonProps = {
  $widthFull: boolean;
  disabled: boolean;
  $filled: boolean;
  $size: 'sm' | 'md';
  $bgColor: 'default' | string;
  $textColor: 'default' | string;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  flex-shrink: 0;
  width: ${({ $widthFull }) => ($widthFull ? '100%' : 'auto')};
  padding: ${({ $size }) => ($size === 'sm' ? '0.8rem 1.6rem' : '1.2rem 2.4rem')};
  border: 1px solid ${({ $filled }) => ($filled ? '#222' : '#e0e0e0')};
  background-color: ${({ $filled }) => ($filled ? '#222' : 'transparent')};
  color: ${({ $filled }) => ($filled ? '#fff' : '#222')};
  border-radius: 0.8rem;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.15s ease-in-out;

  ${({ disabled, $filled, $bgColor, $textColor }) =>
    !disabled &&
    $bgColor === 'default' &&
    $textColor === 'default' &&
    css`
      &:hover {
        background-color: ${$filled && '#fff'};
        color: ${$filled && '#222'};
        border-color: ${$filled && '#222'};
        i::before {
          color: ${$filled && '#222'};
        }
      }
    `}

  i {
    color: ${({ $filled }) => $filled && '#fff !important'};
  }

  ${({ $bgColor, $textColor }) =>
    $bgColor !== 'default' &&
    css`
      background-color: ${$bgColor};
      color: ${$textColor};
      border-color: ${$bgColor};
    `}
`;

export const ButtonText = styled.span<{ $size: 'sm' | 'md' }>`
  font-size: ${({ $size }) => ($size === 'sm' ? '1.5rem' : '1.7rem')};
  font-weight: 600;
`;
