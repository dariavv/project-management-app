import { useTranslations } from 'hooks/useTranslations';
import { BoundryContainer as Container } from './styled';

type BoundryContainerProps = {
  handleReload: () => void;
};

export const BoundryContainer = ({ handleReload }: BoundryContainerProps) => {
  const { t } = useTranslations('error-boundary');
  return (
    <Container onClick={handleReload}>
      {t('smth_went_wrong')}
      <br /> {t('click_to_reload')}
    </Container>
  );
};
