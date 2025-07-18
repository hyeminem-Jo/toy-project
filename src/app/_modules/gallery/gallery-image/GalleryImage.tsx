import React from 'react';
import * as S from './styled';
import IconButton from '@/app/_modules/common/components/button/icon-button/IconButton';
import { getImageUrl } from 'utils/supabase/storage';
import DateUtil from '@/app/_modules/common/utils/dateUtil';
import { useMutation } from '@tanstack/react-query';
import { deleteFile } from 'actions/storageActions';
import { queryClient } from '@/app/config/ReactQueryProvider';

const GalleryImage = ({
  imageName,
  imageUpdatedAt,
  priority = false,
}: {
  imageName: string;
  imageUpdatedAt: string;
  priority?: boolean;
}) => {
  const deleteImageMutation = useMutation({
    mutationFn: deleteFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['images'] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <S.GalleryImageContainer>
      <S.GalleryImageContainerOverlay className='overlay'>
        <IconButton
          type='button'
          iconName='trash'
          color='black'
          loading={deleteImageMutation.isPending}
          onClick={() => deleteImageMutation.mutate(imageName)}
        />
      </S.GalleryImageContainerOverlay>
      <S.GalleryImageTape src='/assets/images/tape.png' alt='tape' aria-hidden='true' />
      <S.GalleryImageWrap>
        <S.GalleryImage
          src={getImageUrl(imageName)}
          alt='갤러리 이미지'
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
