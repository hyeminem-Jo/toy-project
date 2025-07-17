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

export async function searchFiles(search: string = '') {
  const supabase = await createServerSupabaseClient();

  // 빈 검색어인 경우 모든 파일을 가져옴
  if (!search.trim()) {
    const { data, error } = await supabase.storage
      .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
      .list(null);
    if (error) handleError(error);
    return data;
  }

  // 검색어가 있는 경우, 모든 파일을 가져온 후 클라이언트에서 필터링
  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
    .list(null);

  if (error) handleError(error);

  if (data) {
    const filteredData = data.filter((file: FileObject) => {
      const fileName = file.name.toLowerCase();
      const searchTerm = search.toLowerCase();

      return fileName.includes(searchTerm);
    });

    return filteredData;
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
