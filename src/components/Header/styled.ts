import { PRIMARY, WHITE, SHADOW } from 'constants/colors';
import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: ${WHITE};
  z-index: 99;
  top: 0;
  position: sticky;
  box-shadow: 0 0px 12px ${SHADOW};
  transition: 0.8s;
  &.animate {
    transform: translateY(0rem);
  }
  &.animate_down {
    box-shadow: 0 0px 5px ${SHADOW};
    transform: translateY(-0.7rem);
  }
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
