import styled from 'styled-components';
import { WHITE, GREY, PRIMARY, DARK_GREY } from 'constants/colors';

export const BoardContainer = styled.main`
  padding: 30px 40px 20px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  height: calc(100vh - 148px);
  background-color: ${WHITE};
  &::-webkit-scrollbar {
    height: 7px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #f9f9fd;
    border-radius: 15px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${GREY};
  }
`;

export const IconContainer = styled.div`
  padding: 0 0 0 15px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  width: 300px;
  height: 140px;
  border: 1px dashed ${DARK_GREY};
  border-radius: 10px;
  color: ${DARK_GREY};
  cursor: pointer;
  &:hover {
    color: ${PRIMARY};
    border: 1px dashed ${PRIMARY};
    transition: 0.2s;
  }
`;
