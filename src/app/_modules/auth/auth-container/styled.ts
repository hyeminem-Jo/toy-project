import styled from '@emotion/styled';
import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_modules/common/constant/breakpoint';
import Image from 'next/image';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
`;

export const AuthBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  min-width: 45rem;
  margin: 0 auto;

  @media (max-width: ${BREAKPOINT_SM}px) {
    min-width: 100%;
  }
`;

export const AuthBox = styled.div`
  width: 100%;
  padding: 3.5rem;
  border: 1px solid #222;
  background-color: whitesmoke;
`;

export const AuthDescBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  gap: 1rem;
  width: 100%;
  border: 1px solid #222;
  background-color: whitesmoke;
  font-size: 1.5rem;
  font-weight: 600;

  @media (max-width: ${BREAKPOINT}px) {
    gap: 0.8rem;
  }
`;

export const AuthImageWrap = styled.div`
  position: relative;
  padding: 1rem;
  margin: 0 auto;
  width: 20rem;
  height: 10rem;

  @media (max-width: ${BREAKPOINT_SM}px) {
    width: 17rem;
    height: 7rem;
  }
`;

export const AuthImage = styled(Image)`
  object-fit: contain;
`;
