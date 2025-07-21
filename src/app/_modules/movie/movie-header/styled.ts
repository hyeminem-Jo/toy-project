import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';
import Link from 'next/link';

export const MovieHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, #000, transparent);
  width: 100%;
  height: 10rem;
  padding: 0 5rem;

  @media (max-width: ${BREAKPOINT}px) {
    height: 8rem;
    padding: 0 2rem;
  }
`;

export const MovieHeaderInputWrap = styled.div`
  position: static;
  @media (max-width: ${BREAKPOINT}px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 5rem;
    padding: 0 2rem;
  }
`;

export const MovieLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`;

export const MovieLogoText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: #fff;
  opacity: 0.3;
`;
