import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import EmotionRegistry from './_modules/common/styles/EmotionRegistry';
import { Provider } from 'jotai';
import { ReactQueryProvider } from './config/ReactQueryProvider';
import './_modules/common/styles/reset.css';
import './_modules/common/styles/globals.css';
import './_modules/common/styles/font.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '혜진이의 토이 프로젝트',
  description: '혜진이의 토이 프로젝트입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'
          integrity='sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReactQueryProvider>
          <Provider>
            <EmotionRegistry>{children}</EmotionRegistry>
          </Provider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
