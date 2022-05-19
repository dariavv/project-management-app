import { FC, ReactNode } from 'react';
import { Footer, Header } from 'components';
import { ScrollConteiner } from './styled';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <ScrollConteiner>
      <Header />
      {children}
      <Footer />
    </ScrollConteiner>
  );
};
