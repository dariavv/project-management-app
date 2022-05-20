import styled from 'styled-components';
import { GREY, LIGHTGREY, SHADOW_BLUE } from 'constants/colors';

export const ColumnItem = styled.div`
  min-width: 300px;
  height: calc(100% - 10px);
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${LIGHTGREY};
  margin: 0 20px 0 0;
  border-radius: 10px;
  box-shadow: 0 10px 10px ${SHADOW_BLUE};
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #f9f9fd;
    border-radius: 15px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: ${GREY};
  }
`;

export const ColumnTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 12px;
  background-color: ${LIGHTGREY};
  border-radius: 5px 5px 0 0;
  z-index: 3;
  position: sticky;
  top: 0;
  font-weight: 700;
  text-align: justify;
`;
