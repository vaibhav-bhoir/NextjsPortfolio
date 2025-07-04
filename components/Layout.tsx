import React from 'react';
import Footer from './Footer';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import ThemeChanger from './ThemeChanger';

interface GlobalSettings {
  fields?: {
    mainNavigation: {
      fields: {
        label: string;
        link: string;
      };
    }[];
    footerCopyright?: string;
    footerSignature?: string;
  };
}

interface LayoutProps {
  Component: React.ElementType;
  pageProps: {
    globalSettings: GlobalSettings;
    [key: string]: unknown;
  };
}

const Layout: React.FC<LayoutProps> = ({ Component, pageProps }) => {
  const { globalSettings } = pageProps;

  console.log('🚀 ~ globalSettings:', globalSettings);

  return (
    <>
      <Header data={globalSettings?.fields || {}} />
      <main className="flex-1 overflow-hidden pt-[57px] lg:pt-[98px]">
        <LeftSidebar />
        <ThemeChanger />
        <Component {...pageProps} />
      </main>
      <Footer data={globalSettings?.fields || {}} />
    </>
  );
};

export default Layout;
