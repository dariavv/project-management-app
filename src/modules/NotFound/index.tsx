import { FC } from 'react';
import { useTranslations } from 'hooks/useTranslations';
import {
  ContainerNotFound,
  NotFoundTop,
  NotFoundTopInner,
  NFHeading,
  NFText,
  StyledLink,
  ConteinerNotFoundImg,
  NotFoundImg,
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
        <ConteinerNotFoundImg>
          <NotFoundImg />
        </ConteinerNotFoundImg>
        <Footer />
      </ContainerNotFound>
    </>
  );
};
