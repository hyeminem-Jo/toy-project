import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Lottie from 'react-lottie';

type IconButtonProps = {
  $heightFull: boolean;
  disabled: boolean;
  $color: 'white' | 'black';
  $iconName: string;
};

export const IconButton = styled.button<IconButtonProps>`
  width: 3.5rem;
  height: ${({ $heightFull }) => ($heightFull ? '100%' : '3.5rem')};
  padding: 0.8rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.8rem;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ $color }) => ($color === 'white' ? '#fff' : '#222')};
  opacity: 1;

  i::before {
    color: ${({ $color }) => ($color === 'white' ? '#222' : '#fff')};
  }

  &:hover {
    ${({ $iconName }) =>
      $iconName === 'trash' &&
      css`
        i::before {
          color: red;
        }
      `}
  }
`;
