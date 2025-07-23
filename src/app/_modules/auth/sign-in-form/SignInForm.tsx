'use client';

import * as S from './styled';
import Input from '@/app/_modules/common/components/form/input/Input';
import Button from '@/app/_modules/common/components/button/button/Button';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createBrowserSupabaseClient } from 'utils/supabase/client';
import { useMutation } from '@tanstack/react-query';

const schema = z.object({
  email: z.string().min(1, '이메일을 입력해주세요.').email('이메일 형식이 올바르지 않습니다.'),
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
});

const SignInForm = () => {
  const supabase = createBrowserSupabaseClient();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const signInMutation = useMutation({
    mutationFn: async (formData: z.infer<typeof schema>) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (data) {
        console.log(data, '로그인 성공');
      }

      if (error) {
        if (error.message === 'Invalid login credentials') {
          alert('이메일 또는 비밀번호가 올바르지 않습니다.');
        } else {
          alert(error.message);
        }
        throw new Error(error.message);
      }
    },
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    signInMutation.mutate(data);
  };

  return (
    <S.SignInFormWrap onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <Input
            id='email'
            placeholder='이메일을 입력하세요.'
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            inputRef={field.ref}
            error={errors.email?.message}
          />
        )}
      />
      <Controller
        name='password'
        control={control}
        render={({ field }) => (
          <Input
            id='password'
            maxLength={12}
            placeholder='비밀번호를 입력하세요.'
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            inputRef={field.ref}
            type='password'
            error={errors.password?.message}
          />
        )}
      />
      <Button type='submit' text='로그인' filled widthFull loading={signInMutation.isPending} />
    </S.SignInFormWrap>
  );
};

export default SignInForm;
