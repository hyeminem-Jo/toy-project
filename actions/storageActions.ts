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
    .list(null);

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

    // 최신순으로 정렬 (created_at 기준 내림차순)
    const sortedData = filteredData.sort((a: FileObject, b: FileObject) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return dateB - dateA; // 내림차순 (최신이 먼저)
    });

    return sortedData;
  }

  return data;
}

// export async function deleteFile(formData: FormData) {
//   const supabase = await createServerSupabaseClient();
//   const file = formData.get('file') as File;

//   const { data, error } = await supabase.storage
//     .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET!)
//     .remove([file.name]);
// }
