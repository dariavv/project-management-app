import { PRIMARY, WHITE, SHADOW } from 'constants/colors';
import styled from 'styled-components';

type HeaderProps = {
  isAnimated: boolean;
};

export const Header = styled.header<HeaderProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: ${({ isAnimated }) => (isAnimated ? '15px 40px' : '20px 40px')};
  background-color: ${WHITE};
  z-index: 99;
  top: 0;
  position: fixed;
  transition: 0.8s;
  box-shadow: ${({ isAnimated }) => (isAnimated ? `0 0px 5px ${SHADOW}` : `0 0px 12px ${SHADOW}`)};
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
