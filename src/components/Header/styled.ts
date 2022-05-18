import { PRIMARY, WHITE, SHADOW } from 'constants/colors';
import styled from 'styled-components';

export const TheHeader = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  // background-color: ${WHITE};
  // z-index: 99;
  // top: 0;
  // position: sticky;
  // box-shadow: 0 0px 10px ${SHADOW};
  transition: 0.5s;
  // &.header__main {
  //   padding: 20px 40px;
  // }
  // &.header__slide__down {
  //   padding: 15px 40px;
  // }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${PRIMARY};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
