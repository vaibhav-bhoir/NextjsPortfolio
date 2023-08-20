import 'tailwindcss/tailwind.css';
import '../style/global.css';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Layout Component={Component} pageProps={pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
