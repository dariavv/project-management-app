import { DARK_GREY } from 'constants/colors';
import { TitleRegular } from 'theme';
import styled from 'styled-components';

export const Main = styled.main`
  padding: 40px 40px 100px;
  width: 100%;
  overflow: auto;
  height: calc(100% - 150px);
  transition: 0.7s;
  @media ${({ theme }) => theme.media.phone} {
    padding: 20px 20px 70px;
  }
`;

export const NoBoards = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 13%;
  color: ${DARK_GREY};
  ${TitleRegular};
  p {
    margin: 0 0 10px 0;
  }
`;
