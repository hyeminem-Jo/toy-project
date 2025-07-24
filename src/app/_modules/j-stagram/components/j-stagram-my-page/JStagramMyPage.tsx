'use client';

import * as S from './styled';
import { myInfoState } from '@/app/store';
import { useAtomValue } from 'jotai';
import Image from 'next/image';
import DateUtil from '@/app/_modules/common/utils/dateUtil';

const JStagramMyPage = () => {
  const myInfo = useAtomValue(myInfoState);

  return (
    <S.JStagramMyPageContainer>
      <S.ProfileImage $hasImage={!!myInfo?.user_metadata?.avatar_url}>
        {myInfo?.user_metadata?.avatar_url ? (
          <Image
            src={myInfo?.user_metadata?.avatar_url}
            alt='내 프로필 이미지'
            fill
            priority
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        ) : (
          <i className='fa-solid fa-user' />
        )}
      </S.ProfileImage>
      <div>
        <S.JStagramMyPageTitle>My Info</S.JStagramMyPageTitle>
        <S.JStagramMyPageTitle>_</S.JStagramMyPageTitle>
        <S.JStagramMyInfoList>
          <S.JStagramMyInfoItem>
            <S.JStagramMyInfoItemTitle>Name: </S.JStagramMyInfoItemTitle>
            <S.JStagramMyInfoItemValue>
              {myInfo?.user_metadata?.preferred_username || myInfo?.user_metadata?.name}
            </S.JStagramMyInfoItemValue>
          </S.JStagramMyInfoItem>
          <S.JStagramMyInfoItem>
            <S.JStagramMyInfoItemTitle>Email: </S.JStagramMyInfoItemTitle>
            <S.JStagramMyInfoItemValue>{myInfo?.email}</S.JStagramMyInfoItemValue>
          </S.JStagramMyInfoItem>
          <S.JStagramMyInfoItem>
            <S.JStagramMyInfoItemTitle>Created At: </S.JStagramMyInfoItemTitle>
            <S.JStagramMyInfoItemValue>
              {DateUtil.format(myInfo?.created_at)}
            </S.JStagramMyInfoItemValue>
          </S.JStagramMyInfoItem>
          <S.JStagramMyInfoItem>
            <S.JStagramMyInfoItemTitle>Last Sign In At: </S.JStagramMyInfoItemTitle>
            <S.JStagramMyInfoItemValue>
              {DateUtil.format(myInfo?.last_sign_in_at)}
            </S.JStagramMyInfoItemValue>
          </S.JStagramMyInfoItem>
        </S.JStagramMyInfoList>
      </div>
    </S.JStagramMyPageContainer>
  );
};

export default JStagramMyPage;
