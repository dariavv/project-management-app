import { PRIMARY, SHADOW_GREY } from 'constants/colors';
import { Card } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0 0px 10px ${SHADOW_GREY};
  .ant-card-head {
    padding: 0 15px;
  }
  .ant-card-body {
    padding: 25px 15px 25px;
  }
  &:hover {
    h4 {
      color: ${PRIMARY};
      transition: 0.3s ease;
    }
  }
`;

export const Title = styled.span`
  margin: 0;
`;

export const CardItem = styled(Card)`
  cursor: pointer;
`;

export const Description = styled.p`
  margin: 0;
`;
