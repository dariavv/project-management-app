import styled from 'styled-components';
import { PRIMARY } from 'constants/colors';

export const Container = styled.div`
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.div`
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

export const Title = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: ${PRIMARY};
`;

export const Description = styled.div`
  width: 60%;
  height: auto;
  font-size: 1.2rem;
  text-align: center;
`;
