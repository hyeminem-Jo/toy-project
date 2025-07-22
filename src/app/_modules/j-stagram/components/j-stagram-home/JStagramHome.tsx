'use client';

import * as S from './styled';
import Button from '@/app/_modules/common/components/button/button/Button';

const JStagramHome = () => {
  const username = 'hyejin';
  return (
    <S.JStagramHomeContainer>
      <S.JStagramHomeDesc>
        <h2>Hello {username}!</h2>
        <span>Welcome to J-stagram &#58;&#41; 👋🏻</span>
      </S.JStagramHomeDesc>
      <Button
        text='로그아웃'
        filled
        // onClick={() => router.push('/')}
      />
    </S.JStagramHomeContainer>
  );
};

export default JStagramHome;
