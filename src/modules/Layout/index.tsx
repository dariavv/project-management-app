import { FC, ReactNode } from 'react';
import { Footer, Header } from 'components';
import { motion, useViewportScroll } from 'framer-motion';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { scrollY } = useViewportScroll();
  const offsetY = [0, 10];

  return (
    <>
      <motion.div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexDirection: 'column',
        }}
      >
        <Header offsetY={offsetY} scrollY={scrollY} />
        {children}
        <Footer />
      </motion.div>
    </>
  );
};
