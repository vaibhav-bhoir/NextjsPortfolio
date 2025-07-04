import React from 'react';
import Footer from './Footer';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import ThemeChanger from './ThemeChanger';

interface LayoutProps {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
}

const Layout: React.FC<LayoutProps> = ({ Component, pageProps }) => {
  const { globalSettings } = pageProps;

  console.log('🚀 ~ globalSettings:', globalSettings);

  return (
    <>
      <Header />
      <main className="flex-1 overflow-hidden pt-[57px] lg:pt-[98px]">
        <LeftSidebar />
        <ThemeChanger />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
