import { FC, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* Header */}
      {children}
      {/* Footer */}
    </>
  );
};
