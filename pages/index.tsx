// pages/index.tsx

// This file is used to redirect from the root URL (/) to the homepage (/home). -
// In theory, we dont need this file if we have a homepage slug set in the CMS so slug file shoudl handle it. but somehow it doesn't work as expected.
// So we use this file to ensure that the root URL always redirects to the homepage.
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  console.log('Redirecting from / to /home');

  return {
    redirect: {
      destination: '/home', // or whatever slug you set for homepage
      permanent: false,
    },
  };
};

// You don’t strictly need it.
// But you do need some default export in pages/index.tsx, even if it's unused — because Next.js requires a default export in every page file.

export default function RedirectToHome() {
  return null;
}
