import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setLanguage } from 'store/reducers/exampleSlice';
import { Title } from 'theme';
import * as Styled from './styled';

const Main: FC = () => {
  const { language } = useAppSelector((state) => state.example);
  const dispatch = useAppDispatch();

  return (
    <Styled.Main>
      <Title>Project Management App</Title>
      <h3>{language}</h3>
      <div>
        <button onClick={() => dispatch(setLanguage('en'))}>Language EN</button>
        <button onClick={() => dispatch(setLanguage('ru'))}>Language RU</button>
      </div>
    </Styled.Main>
  );
};

export default Main;
