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
    socialNavigation: {
      fields: {
        iconName: string;
        label?: string;
        link: string;
      };
    }[];
    footerCopyright?: string;
    footerSignature: string;
  };
}

interface LayoutProps {
  Component: React.ElementType;
  pageProps: {
    globalSettings: GlobalSettings;
  };
}

const Layout: React.FC<LayoutProps> = ({ Component, pageProps }) => {
  const { globalSettings } = pageProps;
  const { fields: { mainNavigation, socialNavigation, footerSignature } = {} } =
    globalSettings || {};

  return (
    <>
      <Header mainNavigation={mainNavigation || []} />
      <main className="flex-1 overflow-hidden pt-[57px] lg:pt-[98px]">
        <LeftSidebar socialNavigation={socialNavigation || []} />
        <ThemeChanger />
        <Component {...pageProps} />
      </main>
      <Footer footerSignature={footerSignature || ''} />
    </>
  );
};

export default Layout;
