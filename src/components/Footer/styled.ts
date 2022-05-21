import { WHITE, DARK } from './../../constants/colors';
import { GREY } from 'constants/colors';
import { TextBold } from 'theme';
import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 40px;
  position: sticky;
  bottom: 0%;
  z-index: 3;
  width: 100%;
  height: 110px;
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
