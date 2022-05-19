import styled from 'styled-components';
import { PRIMARY } from 'constants/colors';

export const Container = styled.section`
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 40px 60px;
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: ${PRIMARY};
`;

export const Description = styled.p`
  width: 60%;
  height: auto;
  font-size: 1.2rem;
  text-align: center;
`;
