import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';

export const SignInFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${BREAKPOINT}px) {
    gap: 0.8rem;
  }
`;
