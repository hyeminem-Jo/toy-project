import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CheckboxFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: none;
  padding: 0;
  margin: 0;
`;

export const CheckboxWrap = styled.div<{ $width?: number }>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ $width }) => ($width ? `${$width}px` : 'auto')};
`;

export const CheckboxInput = styled.input<{
  $error?: boolean;
}>`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  opacity: 0;
  z-index: 1;

  ${({ $error }) =>
    $error &&
    `
  accent-color: #dc3545;
  `}
`;

export const CheckboxLabel = styled.label`
  font-size: 1rem;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const RequiredMark = styled.span`
  color: #dc3545;
  font-size: 0.875rem;
`;

export const ErrorMessage = styled.p<{ color?: string }>`
  font-size: 0.875rem;
  color: ${({ color }) => color || '#dc3545'};
  margin: 0;
  padding-left: 1.7rem;
`;

export const CustomCheckbox = styled.div<{ $isChecked?: boolean; $error?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  background-color: #fff;
  overflow: hidden;
  i {
    opacity: 0;
  }

  ${({ $isChecked }) =>
    $isChecked &&
    css`
      background-color: #000;
      border-color: #000;
      i {
        opacity: 1;
        color: #fff !important;
      }
    `}
`;
