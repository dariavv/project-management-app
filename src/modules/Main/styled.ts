import styled from 'styled-components';

export const Main = styled.main`
  align-items: center;
  justify-content: center;
  padding: 40px 40px 100px;
  width: 100%;
  overflow: auto;
  height: calc(100% - 150px);
  transition: 0.7s;
  @media ${({ theme }) => theme.media.phone} {
    padding: 20px 20px 70px;
  }
`;
