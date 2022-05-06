import { FC, useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import i18n from 'locales/i18n';
import { setLanguage } from 'store/reducers/exampleSlice';
import { useTranslations } from 'hooks/useTranslations';
import { EN, RU } from 'constants/languages';
import * as Styled from './styled';

export const Header: FC = () => {
  // TODO: save language to local storage, remove local state
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
    <Styled.Header>
      <h2>{t('title')}</h2>
      <div>
        <h3>{language}</h3>
        <input
          type="checkbox"
          name="language"
          id="language"
          onChange={handleChange}
          checked={isChecked}
        />
      </div>
    </Styled.Header>
  );
};
