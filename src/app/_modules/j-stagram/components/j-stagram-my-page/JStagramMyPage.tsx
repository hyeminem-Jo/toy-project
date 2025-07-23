'use client';

// import * as S from './styled';
import { myInfoState } from '@/app/store';
import { useAtomValue } from 'jotai';

const JStagramMyPage = () => {
  const myInfo = useAtomValue(myInfoState);

  return (
    <div>
      <h2>마이 페이지 입니다</h2>
      <p>이메일: {myInfo?.email}</p>
      <p>전화번호: {myInfo?.phone}</p>
      <p>가입일: {myInfo?.created_at}</p>
      <p>마지막 로그인: {myInfo?.last_sign_in_at}</p>
    </div>
  );
};

export default JStagramMyPage;
