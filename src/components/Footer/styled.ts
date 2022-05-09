import { WHITE, DARK } from './../../constants/colors';
import styled from 'styled-components';
import { GREY } from 'constants/colors';
import { TextBold } from 'theme';

export const ContainerFooter = styled.div`
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  padding: 20px 40px;
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: ${DARK};
  color: ${WHITE};
  font-weight: 700;
`;

export const TextLink = styled.div`
  color: ${GREY};
  ${TextBold};
`;

export const RSLogo = styled.div`
  height: 15px;
  weight: 15px;
  background-image: url(assets/images/logo_rs.png);
`;
