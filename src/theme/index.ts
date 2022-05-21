import styled, { css } from 'styled-components';
import { PRIMARY } from 'constants/colors';

export const Title = css`
  font-weight: 600 !important;
  font-size: 1.6rem !important;
  line-height: 150% !important;
`;

export const TextBold = css`
  font-weight: 700 !important;
  font-size: 1rem !important;
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
    cursor: pointer;
    &:hover {
      color: ${PRIMARY};
    }
  }
`;

export const ContainerHeight = styled.div`
  width: 100%;
  height: (100vh - 110px);
`;
