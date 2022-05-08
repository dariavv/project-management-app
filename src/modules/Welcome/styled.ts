import styled from 'styled-components';
import { PRIMARY } from 'constants/colors';

export const Container = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WelcomeButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 40px 60px;
`;

export const Title = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: ${PRIMARY};
`;

export const BlockP = styled.div`
  width: 60%;
  height: auto;
  font-size: 1.2rem;
  text-align: center;
`;
