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
      <h2>Main Page</h2>
      <Button type="primary" onClick={handleLogOut}>
        {t('log_out')}
      </Button>
    </Styled.Main>
  );
};

export default Main;
