import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LeftSidebar from './LeftSidebar';

interface LayoutProps {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
}

const Layout: React.FC<LayoutProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <main className="flex-1 pt-[57px] lg:pt-[98px]">
        <LeftSidebar />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
