import { FC, useCallback, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import i18n from 'locales/i18n';
import { setLanguage } from 'store/reducers/exampleSlice';
import { useTranslations } from 'hooks/useTranslations';
import { EN, RU } from 'constants/languages';
import { Switch } from 'antd';
import { Button } from 'components';
import * as Styled from './styled';

type HeaderProps = {
  handleLogOut: () => void;
};

// TODO: save language to local storage, remove local state
export const Header: FC<HeaderProps> = ({ handleLogOut }) => {
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
      <Styled.Logo>LOGO0</Styled.Logo>
      <div>
        <Switch
          id="language"
          checked={isChecked}
          checkedChildren={language}
          unCheckedChildren={language}
          onChange={handleChange}
        />
        <Button type="primary" onClick={handleLogOut}>
          {t('log_out')}
        </Button>
      </div>
    </Styled.Header>
  );
};
