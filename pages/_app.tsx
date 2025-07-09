import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Layout from '../components/global/Layout';
import Icons from '../components/Icons';
import PageLoader from '../components/PageLoader';
import '../style/global.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    // @ts-ignore:next-line
    <ThemeProvider>
      {isLoading && <PageLoader />}
      <Icons />
      <Layout Component={Component} pageProps={pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
