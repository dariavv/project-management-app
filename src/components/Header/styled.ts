import { PRIMARY, WHITE, SHADOW } from 'constants/colors';
import styled from 'styled-components';

export const Header = styled.header<{ animated: boolean }>`
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
  // box-shadow: 0 0px 12px ${SHADOW};
  transition: 0.8s;
  transform: ${({ animated }) => (animated ? 'translateY(-1rem)' : 'translateY(0rem)')};
  box-shadow: ${({ animated }) => (animated ? `0 0px 5px ${SHADOW}` : `0 0px 12px ${SHADOW}`)};
`;

export const Logo = styled.h1`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: ${PRIMARY};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
