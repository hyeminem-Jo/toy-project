import React from 'react';
import * as S from './styled';
import IconButton from '@/app/_modules/common/components/button/icon-button/IconButton';
import { getImageUrl } from 'utils/supabase/storage';
import DateUtil from '@/app/_modules/common/utils/dateUtil';

const GalleryImage = ({
  imageName,
  imageUpdatedAt,
  priority = false,
}: {
  imageName: string;
  imageUpdatedAt: string;
  priority?: boolean;
}) => {
  return (
    <S.GalleryImageContainer>
      <S.GalleryImageContainerOverlay className='overlay'>
        <IconButton iconName='trash' color='black' />
      </S.GalleryImageContainerOverlay>
      <S.GalleryImageTape src='/assets/images/tape.png' alt='tape' />
      <S.GalleryImageWrap>
        <S.GalleryImage
          src={getImageUrl(imageName)}
          alt='gallery'
          fill
          priority={priority}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </S.GalleryImageWrap>
      <S.GalleryImageInfo>
        <S.GalleryImageTitle>{imageName}</S.GalleryImageTitle>
        <S.GalleryImageDate>{DateUtil.format(imageUpdatedAt)}</S.GalleryImageDate>
      </S.GalleryImageInfo>
    </S.GalleryImageContainer>
  );
};

export default GalleryImage;
