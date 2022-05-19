import { FC, ReactNode } from 'react';
import { Footer, Header } from 'components';
import * as Styled from './styled';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Styled.ScrollConteiner>
      <Header />
      {children}
      <Footer />
    </Styled.ScrollConteiner>
  );
};
