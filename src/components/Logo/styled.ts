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
`;

export const Logo = styled.h1`
  color: ${PRIMARY};
  margin: 0 0 0 7px;
  ${Title}
  @media (max-width: 300px) {
    display: none;
  }
`;
