import 'tailwindcss/tailwind.css';
import '../style/global.css';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import PageLoader from '../components/PageLoader';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class">
      {isLoading && <PageLoader />}
      <Layout Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
