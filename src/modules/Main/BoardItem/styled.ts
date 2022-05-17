import { PRIMARY } from 'constants/colors';
import { Card } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  width: fit-content;
  cursor: pointer;
  &:hover {
    color: ${PRIMARY};
    transition: 0.2s;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
    &:hover {
      color: ${PRIMARY};
    }
  }
`;

export const CardItem = styled(Card)`
  margin: 0 0 10px 0;
`;
