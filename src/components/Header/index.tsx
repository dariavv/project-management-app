import { FC, useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import i18n from 'locales/i18n';
import { setLanguage } from 'store/reducers/exampleSlice';
import { useTranslations } from 'hooks/useTranslations';
import { EN, RU } from 'constants/languages';
import * as Styled from './styled';
import { Switch } from 'antd';
import { Button } from 'components/Button';

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
      <Styled.Logo>LOGO</Styled.Logo>
      <div>
        <Switch
          id="language"
          checked={isChecked}
          checkedChildren={language}
          unCheckedChildren={language}
          onChange={handleChange}
        />
        <Button m="0 20px">LogIn</Button>
        <Button>LogOut</Button>
      </div>
    </Styled.Header>
  );
};
