import { GREY, DARK, WHITE, PRIMARY } from 'constants/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 267px;
  margin: 5px 0;
  border: 1px solid ${GREY};
  border-radius: 10px;
  background-color: ${WHITE};
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.div`
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

export const Description = styled.div`
  display: flex;
  width: 100%;
  padding: 0 7px;
`;

export const Assignee = styled.div`
  display: flex;
  margin: 5px 7px;
  span {
    color: ${PRIMARY};
    margin-left: 5px;
  }
`;
