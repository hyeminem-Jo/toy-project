'use client';

import React from 'react';
import * as S from './styled';

const HomeContainer = () => {
  return (
    <S.HomeContainer>
      <S.HomeContent>
        <h1>
          <i className='fa-solid fa-house'></i> Home
        </h1>
        <S.HomeNav>
          <S.HomeNavItem href='/users'>
            <i className='fa-solid fa-users'></i> Users
          </S.HomeNavItem>
          <S.HomeNavItem href='/todo'>
            <i className='fa-solid fa-list'></i> Todo List
          </S.HomeNavItem>
        </S.HomeNav>
      </S.HomeContent>
    </S.HomeContainer>
  );
};

export default HomeContainer;
