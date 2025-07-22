'use client';

import * as S from './styled';
import Link from 'next/link';
import Image from 'next/image';

const SideBar = () => {
  return (
    <S.SideBarContainer>
      <S.SideBarHomeLink href='/j-stagram' />
      <S.SideBarContent>
        <S.SideBarLink href='/j-stagram'>
          <i className='fa-solid fa-house'></i>
        </S.SideBarLink>
        <S.SideBarLink href='/j-stagram/search'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </S.SideBarLink>
        <S.SideBarLink href='/j-stagram/message'>
          <i className='fa-solid fa-paper-plane'></i>
        </S.SideBarLink>
        <S.SideBarProfileLink href='/j-stagram/my-page'>
          <Image
            src='/assets/images/test.jpeg'
            alt='내 프로필 이미지'
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </S.SideBarProfileLink>
      </S.SideBarContent>
      <S.SideBarLogoutButton>
        <i className='fa-solid fa-right-from-bracket'></i>
      </S.SideBarLogoutButton>
    </S.SideBarContainer>
  );
};

export default SideBar;
