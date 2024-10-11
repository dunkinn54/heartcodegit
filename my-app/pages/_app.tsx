import { ClerkProvider } from '@clerk/nextjs';
import type { AppProps } from 'next/app'; // Import AppProps from next/app

function MyApp({ Component, pageProps }: AppProps) {  // Use AppProps for the function argument type
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
