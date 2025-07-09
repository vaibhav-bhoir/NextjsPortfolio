import { useRouter } from 'next/router';
import React from 'react';
import LeftSidebar from '../LeftSidebar';
import ThemeChanger from '../ThemeChanger';
import Footer from './Footer';
import Header, { SiteLogo } from './Header';

interface GlobalSettings {
  fields?: {
    siteLogo: SiteLogo;
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

  const { siteLogo, mainNavigation, socialNavigation, footerSignature } =
    globalSettings?.fields ?? {};
  const router = useRouter();

  const is404 = router.pathname === '/404';

  return (
    <>
      <Header siteLogo={siteLogo || {}} mainNavigation={mainNavigation || []} />
      <main className="flex-1 overflow-hidden pt-[120px] lg:pt-[150px]">
        <LeftSidebar socialNavigation={socialNavigation || []} />
        {!is404 && <ThemeChanger />}
        <Component {...pageProps} />
      </main>
      <Footer footerSignature={footerSignature || ''} />
    </>
  );
};

export default Layout;
