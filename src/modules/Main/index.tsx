import { FC, useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setLanguage } from 'store/reducers/exampleSlice';
import { Title } from 'theme';
import * as Styled from './styled';
import { useTranslations } from 'hooks/useTranslations';
import i18n from 'locales/i18n';
import { EN, RU } from 'constants/languages';

const Main: FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { language } = useAppSelector((state) => state.example);
  const dispatch = useAppDispatch();
  const { t } = useTranslations('main');

  const handleChange = useCallback(() => {
    setIsChecked(!isChecked);
    if (isChecked) {
      dispatch(setLanguage(EN));
      i18n.changeLanguage(EN);
    } else {
      dispatch(setLanguage(RU));
      i18n.changeLanguage(RU);
    }
  }, [dispatch, isChecked]);

  return (
    <Styled.Main>
      <Title>{t('title')}</Title>
      <h3>{language}</h3>
      <input
        type="checkbox"
        name="language"
        id="language"
        onChange={handleChange}
        checked={isChecked}
      />
    </Styled.Main>
  );
};

export default Main;
