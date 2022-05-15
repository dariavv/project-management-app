import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from 'hooks/useTranslations';
import {
  ContainerNotFound,
  NotFoundTop,
  NotFoundTopInner,
  NFHeading,
  NFText,
  StyledLink,
} from './styled';
import { Footer } from 'components';

export const NotFound: FC = () => {
  const { t } = useTranslations('main');

  return (
    <>
      <ContainerNotFound>
        <NotFoundTop>
          <NotFoundTopInner>
            <NFHeading>404</NFHeading>
            <NFText>{t('not_found')}</NFText>
          </NotFoundTopInner>
          <StyledLink to="/">{t('go_to_main')}</StyledLink>
        </NotFoundTop>
      </ContainerNotFound>
      <Footer />
    </>
  );
};
