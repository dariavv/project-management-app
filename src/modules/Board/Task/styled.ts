import { GREY, DARK, WHITE } from 'constants/colors';
import styled from 'styled-components';

export const ContainerTask = styled.div`
  width: 90%;
  margin: 5px 0;
  border: 1px solid ${GREY};
  border-radius: 10px;
  background-color: ${WHITE};
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderTask = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px;
  border-radius: 5px 5px 0 0;
  border-color: ${DARK};
  z-index: 1;
  position: sticky;
  font-weight: 500;
  text-align: justify;
`;
export const TaskContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 7px;
`;

export const IconContainer = styled.div`
  padding: 0 0 0 15px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
