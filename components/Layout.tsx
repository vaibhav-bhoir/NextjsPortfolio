import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';
import ThemeChanger from './ThemeChanger';

interface LayoutProps {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
}

const Layout: React.FC<LayoutProps> = ({ Component, pageProps }) => {
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
