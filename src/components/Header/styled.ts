import { PRIMARY } from 'constants/colors';
import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  aglin-items: center;
  padding: 20px 40px;
  background-color: ${PRIMARY};
  z-index: 2;
  position: sticky;
  top: 0;
`;

export const Logo = styled.div`
  font-weight: 700;
  color: white;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
