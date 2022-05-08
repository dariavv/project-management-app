import { FC } from 'react';
import { Button } from 'components';
import * as Styled from './styled';

type MainProps = {
  handleLogOut: () => void;
};

// TODO: move Log out button to Header
const Main: FC<MainProps> = ({ handleLogOut }) => {
  return (
    <Styled.Main>
      <h2>Main Page</h2>
      <Button type="primary" onClick={handleLogOut}>
        Log out
      </Button>
    </Styled.Main>
  );
};

export default Main;
