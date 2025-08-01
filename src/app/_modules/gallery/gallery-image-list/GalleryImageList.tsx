'use client';

import * as S from './styled';
import GalleryImage from '../gallery-image/GalleryImage';
import { searchFiles } from 'actions/storageActions';
import { useQuery } from '@tanstack/react-query';
import { FileObject } from '@/app/types/commonType';
import Loading from '@/app/_modules/common/components/loading/Loading';
import { useMemo } from 'react';

const GalleryImageList = ({ searchInput }: { searchInput: string }) => {
  // TODO: 로그인/비로그인 상태에서 파일 조회/업데이트/삭제 처리가 되는지 확인 요망

  const searchImagesQuery = useQuery({
    queryKey: ['images', searchInput],
    queryFn: () => searchFiles(searchInput),
  });

  const filteredImages = useMemo(
    () =>
      searchImagesQuery.data?.filter(
        (image: FileObject) => !image.name.includes('emptyFolderPlaceholder'),
      ),
    [searchImagesQuery.data],
  );

  return (
    <S.GalleryImageListContainer>
      {searchImagesQuery.isLoading && <Loading />}
      <S.GalleryImageList>
        {filteredImages &&
          filteredImages.map((image: FileObject) => (
            <GalleryImage
              key={image.id}
              imageName={image.name}
              imageUpdatedAt={image.updated_at}
              priority
            />
          ))}
      </S.GalleryImageList>
      {filteredImages && filteredImages.length === 0 && (
        <S.GalleryImageListEmpty>이미지가 없습니다. 🙁</S.GalleryImageListEmpty>
      )}
    </S.GalleryImageListContainer>
  );
};

export default GalleryImageList;
