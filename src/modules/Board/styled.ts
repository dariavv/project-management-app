import { LIGHTGREY } from './../../constants/colors';
import styled from 'styled-components';
import { WHITE, GREY } from 'constants/colors';

export const Board = styled.div`
  padding: 25px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  height: calc(100vh - 185px);
  background-color: ${WHITE};
  &::-webkit-scrollbar {
    height: 7px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #f9f9fd;
    border-radius: 15px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${GREY};
  }
`;

export const BoardColumns = styled.div`
  min-width: 300px;
  height: calc(100% - 10px);
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${LIGHTGREY};
  margin: 0 20px 0 0;
  height: calc(100% - 10px);
  border-radius: 10px;
  box-shadow: 0 10px 10px rgb(54 132 203 / 30%);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #f9f9fd;
    border-radius: 15px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: ${GREY};
  }
`;

export const HeaderBoard = styled.div`
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

export const Column = styled.div`
  overflow-y: auto;
  padding: 15px;
`;

export const IconContainer = styled.div`
  padding: 0 0 0 15px;
  display: flex;
  justify-content: flex-end;
  widht: 100%;
`;

export const AddBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  border: 2px dashed ${GREY};
  border-radius: 10px;
  padding: 75px 150px;
  color: ${GREY};
  font-weight: 700;
`;
