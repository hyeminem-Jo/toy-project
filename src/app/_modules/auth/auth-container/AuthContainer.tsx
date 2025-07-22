'use client';

import { useState } from 'react';
import SignInForm from '../sign-in-form/SignInForm';
import SignUpForm from '../sign-up-form/SignUpForm';
import * as S from './styled';
import Button from '@/app/_modules/common/components/button/button/Button';

const AuthContainer = () => {
  const [view, setView] = useState<'SIGN_IN' | 'SIGN_UP'>('SIGN_UP');

  const handleViewChange = (view: 'SIGN_IN' | 'SIGN_UP') => {
    setView(view);
  };
  return (
    <S.AuthContainer>
      <S.AuthBoxWrap>
        <S.AuthBox>
          <S.AuthImageWrap>
            <S.AuthImage
              src='/assets/images/jstagram-logo.png'
              alt='j-stagram 로고 이미지'
              fill
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </S.AuthImageWrap>
          {view === 'SIGN_IN' ? (
            <SignInForm setView={handleViewChange} />
          ) : (
            <SignUpForm setView={handleViewChange} />
          )}
        </S.AuthBox>
        <S.AuthDescBox>
          {view === 'SIGN_IN' ? '아직 계정이 없으신가요? 🤔' : '이미 계정이 있으신가요? ☺️'}
          <Button
            text={view === 'SIGN_IN' ? '가입하기' : '로그인하기'}
            iconName='arrow-right'
            onClick={() => handleViewChange(view === 'SIGN_IN' ? 'SIGN_UP' : 'SIGN_IN')}
          />
        </S.AuthDescBox>
      </S.AuthBoxWrap>
    </S.AuthContainer>
  );
};

export default AuthContainer;
