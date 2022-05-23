import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PRIMARY } from 'constants/colors';
import { Title } from 'theme';

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
  color: ${PRIMARY};
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    transition: all 1s ease;
  }
  &:hover:before {
    height: 60px;
  }
`;

export const Logo = styled.h1`
  color: ${PRIMARY};
  margin: 0 0 0 7px;
  ${Title}
  @media (max-width: 450px) {
    display: none;
  }
`;
