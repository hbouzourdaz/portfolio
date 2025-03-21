import { Inter } from 'next/font/google';
import { Tajawal } from 'next/font/google';

// Use Google Fonts instead of local fonts to avoid the target.css error
export const geistSans = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  weight: ['400', '700', '900'],
});

export const geistMono = Inter({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  weight: ['400', '700'],
});

export const tajawal = Tajawal({
  subsets: ['arabic'],
  variable: '--font-tajawal',
  weight: ['400'],
});