import { PRIMARY, WHITE } from 'constants/colors';
import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: ${WHITE};
  z-index: 1;
  position: sticky;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
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
