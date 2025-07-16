'use client';

import React from 'react';
import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_modules/common/constant/breakpoint';
import Button from '@/app/_modules/common/components/button/button/Button';
import { useRouter } from 'next/navigation';

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 2rem;
`;

export const NotFoundText = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 2rem;
  }
`;

const NotFound = () => {
  const router = useRouter();

  return (
    <NotFoundContainer>
      <NotFoundText>존재하지 않는 페이지입니다 😭</NotFoundText>
      <Button
        text='홈으로 돌아가기'
        iconName='arrow-right'
        filled
        onClick={() => router.push('/')}
      />
    </NotFoundContainer>
  );
};

export default NotFound;
