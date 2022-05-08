import { Footer } from '../../components/Footer';
import { Header } from 'components/Header/index';
import { FC } from 'react';
import * as Styled from './styled';

const Main: FC = () => {
  return (
    <Styled.Main>
      <Header></Header>
      <h2>Main Page</h2>
      <Footer></Footer>
    </Styled.Main>
  );
};

export default Main;
