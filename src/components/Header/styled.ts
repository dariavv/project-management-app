import { PRIMARY, WHITE, SHADOW } from 'constants/colors';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from 'theme';

type HeaderProps = {
  isAnimated: boolean;
};

export const Header = styled.header<HeaderProps>`
  top: 0;
  position: sticky;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ isAnimated }) => (isAnimated ? '15px 40px' : '20px 40px')};
  background-color: ${WHITE};
  z-index: 4;
  transition: 0.7s;
  box-shadow: ${({ isAnimated }) => (isAnimated ? `0 0px 5px ${SHADOW}` : `0 0px 12px ${SHADOW}`)};
  @media (max-width: 540px) {
    padding: ${({ isAnimated }) => (isAnimated ? '10px 20px' : '15px 20px')};
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  color: ${PRIMARY};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Logo = styled.h1`
  color: ${PRIMARY};
  margin: 0 0 0 7px;
  ${Title}
  @media (max-width: 450px) {
    display: none;
  }
`;
