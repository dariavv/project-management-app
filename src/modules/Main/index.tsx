import { Footer } from '../../components/Footer';
import { Header } from 'components/Header/index';
import { FC } from 'react';
import { Button } from 'components';
import { useTranslations } from 'hooks/useTranslations';
import * as Styled from './styled';

type MainProps = {
  handleLogOut: () => void;
};

// TODO: move Log out button to Header
const Main: FC<MainProps> = ({ handleLogOut }) => {
  const { t } = useTranslations('main');
  return (
    <Styled.Main>
      <Header></Header>
      <h2>Main Page</h2>
      <Footer></Footer>
      <Button type="primary" onClick={handleLogOut}>
        {t('log_out')}
      </Button>
    </Styled.Main>
  );
};

export default Main;
