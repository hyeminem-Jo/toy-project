import styled from '@emotion/styled';

type IconButtonProps = {
  $heightFull: boolean;
  disabled: boolean;
};

export const IconButton = styled.button<IconButtonProps>`
  width: 3.5rem;
  height: ${({ $heightFull }) => ($heightFull ? '100%' : '3.5rem')};
  padding: 0.8rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.8rem;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: #fff;
`;
