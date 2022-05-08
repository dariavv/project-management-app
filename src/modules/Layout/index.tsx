import { FC, ReactNode } from 'react';
import { Footer, Header } from 'components';

type LayoutProps = {
  children: ReactNode;
  handleLogOut: () => void;
};

export const Layout: FC<LayoutProps> = ({ children, handleLogOut }) => {
  return (
    <>
      <Header handleLogOut={handleLogOut} />
      {children}
      <Footer />
    </>
  );
};
