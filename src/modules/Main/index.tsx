import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setLanguage } from '../../store/reducers/exampleSlice';

const Main: FC = () => {
  const { language } = useAppSelector((state) => state.example);
  const dispatch = useAppDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Project Management App</h1>
      <h3>{language}</h3>
      <button onClick={() => dispatch(setLanguage('en'))}>Language EN</button>
      <button onClick={() => dispatch(setLanguage('ru'))}>Language RU</button>
    </div>
  );
};

export default Main;
