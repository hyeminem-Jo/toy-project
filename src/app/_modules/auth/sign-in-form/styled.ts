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

export const KakaoButtonInner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-content: space-between;

  img {
    width: 2rem;
    height: 2rem;
  }

  span {
    font-weight: 700;
  }
`;
