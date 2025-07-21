import styled from '@emotion/styled';

type ButtonProps = {
  $widthFull: boolean;
  disabled: boolean;
  $filled: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  flex-shrink: 0;
  width: ${({ $widthFull }) => ($widthFull ? '100%' : 'auto')};
  padding: 0.8rem 1.6rem;
  border: 1px solid ${({ $filled }) => ($filled ? '#222' : '#e0e0e0')};
  background-color: ${({ $filled }) => ($filled ? '#222' : 'transparent')};
  color: ${({ $filled }) => ($filled ? '#fff' : '#222')};
  border-radius: 0.8rem;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: ${({ $filled }) => $filled && '#fff'};
    color: ${({ $filled }) => $filled && '#222'};
    border-color: ${({ $filled }) => $filled && '#222'};
  }

  i {
    color: ${({ $filled }) => $filled && '#fff !important'};
  }
`;

export const ButtonText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;
