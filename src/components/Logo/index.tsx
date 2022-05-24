import { FC } from 'react';
import appLogo from 'assets/images/logo_app.png';
import * as Styled from './styled';

export const Logo: FC = () => (
  <Styled.LogoContainer to={'/'}>
    <img src={appLogo} alt="logo" width={30} />
    <Styled.Logo>liosta</Styled.Logo>
  </Styled.LogoContainer>
);
