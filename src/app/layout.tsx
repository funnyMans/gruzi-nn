import type { Metadata } from 'next';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

import { ApolloClientProvider } from '@/shared/providers/apollo-client/ApolloClientProvider';
import NextAuthClientProvider from '@/shared/providers/next-auth/ClientProvider';
import LayoutProvider from '@/shared/ui/LayoutProvider';

import './globals.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

export const metadata: Metadata = {
  title: 'Gruzi-NN',
  description: 'Cargo shipment platform',
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang='en' data-toolpad-color-scheme='light' suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute='class' />
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ApolloClientProvider>
            <NextAuthClientProvider>
              <LayoutProvider>{props.children}</LayoutProvider>
            </NextAuthClientProvider>
          </ApolloClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
