'use client';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

type StyleProps = {
  $error?: boolean;
  $isFocus?: boolean;
  $isFilled?: boolean;
  $isDeleteBtn?: boolean;
  $width?: number;
  $isUnderline?: boolean;
  $isReadonly?: boolean;
  $isLineThrough?: boolean;
};

export const InputFieldset = styled.div`
  width: 100%;
`;

export const Input = styled.input<StyleProps>`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 160%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.18px;
  border: 1px solid #e0e0e0;
  border-radius: 0.8rem;
  padding: 1.3rem 1.6rem;
  padding-right: 5rem;
  &:focus {
    border-color: #000;
  }
  ${({ $isReadonly }) =>
    $isReadonly &&
    css`
      border: none;
      cursor: not-allowed;
    `}
  ${({ $isUnderline }) =>
    $isUnderline &&
    css`
      border: none;
      border-bottom: 1px solid #e0e0e0;
      border-radius: 0;
      padding: 0.8rem 1rem;
    `};

  ${({ $isLineThrough }) =>
    $isLineThrough &&
    css`
      text-decoration: line-through;
    `}
`;

export const InputWrap = styled.div<StyleProps>`
  position: relative;
  width: ${({ $width }) => ($width ? `${$width}px` : '100%')};
`;

export const InputSearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  padding: 0 1.6rem;
  height: 100%;
`;

export const InputInfo = styled.div<StyleProps>`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  column-gap: 1rem;
`;

export const InputLength = styled.span<StyleProps>`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.15rem;
`;

export const DeleteInputBtn = styled.button``;

export const ErrorMessage = styled.p`
  display: block;
  margin-top: 0.6rem;
  text-align: left;
`;
