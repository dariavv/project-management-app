import { GREY, WHITE, PRIMARY } from 'constants/colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 270px;
  margin: 0 0 5px 0;
  border: 1px solid ${GREY};
  border-radius: 4px;
  background-color: ${WHITE};
  &:last-child {
    margin: 0;
  }
  @media (max-width: 540px) {
    width: 250px;
  }
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
  z-index: 1;
  position: sticky;
  font-weight: 500;
`;

export const Description = styled.div`
  width: 100%;
  padding: 0 7px;
  overflow-wrap: break-word;
`;

export const Assignee = styled.div`
  display: flex;
  margin: 5px 7px;
  span {
    color: ${PRIMARY};
    margin-left: 5px;
  }
`;
