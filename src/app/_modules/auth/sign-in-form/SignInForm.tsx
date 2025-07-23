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

interface SignInFormProps {
  setView: (view: 'SIGN_IN' | 'SIGN_UP') => void;
}

const SignInForm = ({ setView }: SignInFormProps) => {
  const supabase = createBrowserSupabaseClient();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  // const watchEmail = watch('email');
  // const watchPassword = watch('password');

  // console.log(watchEmail, watchPassword);

  // const signUpMutation = useMutation({
  //   mutationFn: async () => {
  //     const { data, error } = await supabase.auth.signUp({
  //       email: watchEmail,
  //       password: watchPassword,
  //       options: {
  //         emailRedirectTo: `${window.location.origin}/signup/confirm`,
  //       },
  //     });

  //     if (error) {
  //       throw new Error(error.message);
  //     }

  //     return data;
  //   },
  // });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
  };

  return (
    <S.SignInFormWrap onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <Input
            id='email'
            label='이메일'
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
            label='비밀번호'
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
      <Button
        type='submit'
        text='로그인'
        filled
        widthFull
        // onClick={() => router.push('/')}
      />
    </S.SignInFormWrap>
  );
};

export default SignInForm;
