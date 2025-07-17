import React from 'react';
import * as S from './styled';
import IconButton from '@/app/_modules/common/components/button/icon-button/IconButton';
import { getImageUrl } from 'utils/supabase/storage';

const GalleryImage = ({ image, priority = false }: { image: string; priority?: boolean }) => {
  return (
    <S.GalleryImageContainer>
      <S.GalleryImageContainerOverlay className='overlay'>
        <IconButton iconName='trash' color='black' />
      </S.GalleryImageContainerOverlay>
      <S.GalleryImageTape src='/assets/images/tape.png' alt='tape' />
      <S.GalleryImageWrap>
        <S.GalleryImage
          src={getImageUrl(image)}
          alt='gallery'
          fill
          priority={priority}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </S.GalleryImageWrap>
      <S.GalleryImageInfo>
        <S.GalleryImageTitle>강아지 사진</S.GalleryImageTitle>
        <S.GalleryImageDate>2025-01-01</S.GalleryImageDate>
      </S.GalleryImageInfo>
    </S.GalleryImageContainer>
  );
};

export default GalleryImage;
