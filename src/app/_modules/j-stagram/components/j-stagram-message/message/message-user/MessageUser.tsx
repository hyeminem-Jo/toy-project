'use client';

import DateUtil from '@/app/_modules/common/utils/dateUtil';

import * as S from './styled';
import { User } from '@supabase/supabase-js';
import UserProfileImage from '@/app/_modules/common/components/user-profile-image/UserProfileImage';

interface MessageUserProps {
  user: User;
  onlineAt?: string;
  isChat?: boolean;
  active?: boolean;
  onClick?: () => void;
}

const MessageUser = ({ user, onlineAt, isChat, active, onClick }: MessageUserProps) => {
  return (
    <S.MessageUserContainer $active={active} $isChat={isChat} onClick={onClick}>
      <UserProfileImage user={user} size={40} mobileSize={!isChat ? 45 : 40} />
      <S.MessageUserInfo $isChat={isChat}>
        <S.MessageUserName>
          {user.user_metadata?.preferred_username ||
            user.user_metadata?.name ||
            user.email?.split('@')[0]}
        </S.MessageUserName>
        {onlineAt && (
          <S.MessageUserOnlineAt>
            {DateUtil.renderDateSnsType(onlineAt)} 활성화
          </S.MessageUserOnlineAt>
        )}
      </S.MessageUserInfo>
    </S.MessageUserContainer>
  );
};

export default MessageUser;
