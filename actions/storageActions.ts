'use server';

import { createServerSupabaseClient } from 'utils/supabase/server';
import { FileObject } from '@/app/types/commonType';

function handleError(error: Error) {
  if (error) {
    console.error(error);
    throw error;
  }
}

// export async function uploadFile(formData: FormData) {
//   const supabase = await createServerSupabaseClient();
//   const file = formData.get('file') as File;

//   const { data, error } = await supabase.storage
//     .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
//     .upload(file.name, file, { upsert: true });

//   // handleError(error);
//   if (error) handleError(error);
//   return data;
// }

// 이미지 리스트 조회
export async function searchFiles(search: string = '') {
  const supabase = await createServerSupabaseClient();

  // 모든 파일을 가져옴
  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
    .list(null, {
      sortBy: { column: 'created_at', order: 'desc' }, // 최신순 정렬
    });

  if (error) handleError(error);

  if (data) {
    let filteredData = data;

    // 검색어가 있는 경우 필터링
    if (search.trim()) {
      filteredData = data.filter((file: FileObject) => {
        const fileName = file.name.toLowerCase();
        const searchTerm = search.toLowerCase();

        return fileName.includes(searchTerm);
      });
    }

    return filteredData;
  }

  return data;
}

export async function deleteFile(fileName: string) {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET!)
    .remove([fileName]);

  if (error) handleError(error);

  return data;
}
