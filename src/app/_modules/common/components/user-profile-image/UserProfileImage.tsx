'use client';

import * as S from './styled';
import Image from 'next/image';
import { User } from '@supabase/supabase-js';

interface UserProfileImageProps {
  user: User;
  size?: number;
  mobileSize?: number;
}

const UserProfileImage = ({ user, size = 30, mobileSize }: UserProfileImageProps) => {
  return (
    <S.ProfileImage
      $hasImage={!!user?.user_metadata?.avatar_url}
      $size={size / 10}
      $mobileSize={mobileSize / 10 || size / 10}
    >
      {user?.user_metadata?.avatar_url ? (
        <Image
          src={user?.user_metadata?.avatar_url}
          alt='프로필 이미지'
          fill
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      ) : (
        <i className='fa-solid fa-user' />
      )}
    </S.ProfileImage>
  );
};

export default UserProfileImage;
