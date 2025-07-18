import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from 'utils/supabase/server';

export async function POST(req: NextRequest) {
  try {
    // console.log(Array.from(formData.entries()));
    const formData = await req.formData();
    const files = Array.from(formData.entries()).map(([name, file]) => file as File);

    const result = await Promise.all(
      // 여러 파일 한 번에 업로드 처리
      files.map(async (file) => {
        const supabase = await createServerSupabaseClient();
        const { data, error } = await supabase.storage
          .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET!)
          .upload(file.name, file, { upsert: true });
        if (error) {
          return NextResponse.json({ error: error.message }, { status: 500 });
        }
        return NextResponse.json({ data });
      }),
    );
    return NextResponse.json({ result });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 });
  }
}
