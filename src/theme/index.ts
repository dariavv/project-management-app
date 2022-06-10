import styled, { css } from 'styled-components';
import { PRIMARY } from 'constants/colors';

export const Title = css`
  font-weight: 600 !important;
  font-size: 1.4rem !important;
  line-height: 150% !important;
`;

export const TitleRegular = css`
  font-weight: 400 !important;
  font-size: 1.5rem !important;
  line-height: 150% !important;
`;

export const TextRegular = css`
  font-weight: normal !important;
  font-size: 1rem !important;
  line-height: 150% !important;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  span {
    margin: 0 0 0 5px;
  }
  svg {
    width: 14px;
    cursor: pointer;
    transition: 0.2s ease;
    &:hover {
      color: ${PRIMARY};
    }
  }
`;

export const ContainerHeight = styled.div`
  width: 100%;
  height: (100vh - 110px);
`;

export const ThemeMedia = {
  media: {
    tablet: '(max-width: 768px)',
    phone: '(max-width: 580px)',
  },
};
