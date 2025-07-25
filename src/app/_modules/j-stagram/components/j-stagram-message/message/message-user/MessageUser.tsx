'use client';

import Image from 'next/image';

import { getRandomImage } from 'utils/random';
import DateUtil from '@/app/_modules/common/utils/dateUtil';

import * as S from './styled';
import { useIsMobile } from '@/app/_modules/common/hooks/useIsMobile';

interface MessageUserProps {
  index: number;
  userId: number;
  name: string;
  onlineAt?: string;
  isChat?: boolean;
  active?: boolean;
  onClick?: () => void;
}

const MessageUser = ({
  index,
  userId,
  name,
  onlineAt,
  isChat,
  active,
  onClick,
}: MessageUserProps) => {
  const isMobile = useIsMobile();
  return (
    <S.MessageUserContainer $active={active} $isChat={isChat} onClick={onClick}>
      <Image
        src={getRandomImage(userId) || ''}
        alt='user'
        width={isMobile && !isChat ? 45 : 36}
        height={isMobile && !isChat ? 45 : 36}
      />
      <S.MessageUserInfo $isChat={isChat}>
        <S.MessageUserName>{name}</S.MessageUserName>
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
