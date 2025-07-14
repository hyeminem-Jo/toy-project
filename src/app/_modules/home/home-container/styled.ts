import styled from '@emotion/styled';
import Link from 'next/link';

export const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const HomeContent = styled.div`
  line-height: 1.6;
  /* color: orange; */
`;

export const HomeNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HomeNavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
