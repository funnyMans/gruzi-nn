'use client';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface IProviderProps {
  children: ReactNode;
}
const NextAuthClientProvider = ({ children }: IProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthClientProvider;
