import styled from 'styled-components';
import { PRIMARY } from '../../constants/colors';

export const Welcome = styled.main`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  overfloe: hidden;
  flex-direction: column;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WelcomeButton = styled.section`
  display: flex;
  justify-content: flex-end;
  margin: 40px 60px;
`;

export const h2 = styled.main`
  font-size: 4rem;
  font-weight: 700;
  color: ${PRIMARY};
`;

export const BlockP = styled.main`
  width: 60%;
  height: auto;
  font-size: 1.2rem;
  text-align: center;
`;
