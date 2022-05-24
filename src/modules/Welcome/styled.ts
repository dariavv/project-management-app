import styled from 'styled-components';
import { PRIMARY } from 'constants/colors';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  height: 75px;
  @media (max-width: 540px) {
    height: 65px;
    padding: 15px 20px;
  }
`;

export const Container = styled.main`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 150px);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${PRIMARY};
`;

export const Description = styled.p`
  width: 60%;
  height: auto;
  font-size: 1.05rem;
  text-align: center;
`;
