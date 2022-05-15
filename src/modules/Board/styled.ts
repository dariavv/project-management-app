import { PRIMARY } from './../../constants/colors';
import styled from 'styled-components';
import { BLUE, WHITE, GREY, SHADOW, DARK } from 'constants/colors';

export const Board = styled.div`
  padding: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  height: 76vh;
  background-color: ${BLUE};
  &::-webkit-scrollbar {
    height: 10px;
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
  background-color: ${WHITE};
  margin: 0 20px 0 0;
  height: calc(100% - 10px);
  border-radius: 10px;
  box-shadow: 0 10px 10px rgb(54 132 203 / 30%);
  position: relative;
`;

export const HeaderBoard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: right;
  padding: 15px;
  border-radius: 5px 5px 0 0;
  background-color: ${DARK};
  z-index: 1;
  position: sticky;
  box-shadow: 0 1px 10px ${SHADOW};
  color: ${WHITE};
  font-weight: 700;
  text-align: justify;
`;
export const Column = styled.div`
  overflow-y: auto;
  padding: 15px;
  &::-webkit-scrollbar {
    width: 10px;
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

export const IconContainer = styled.div`
  padding: 0 0 0 15px;
  display: flex;
  justify-content: flex-end;
  wight: 100%;
`;
