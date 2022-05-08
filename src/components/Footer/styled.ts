import styled from 'styled-components';
import { PRIMARY } from '../../constants/colors';

export const WrapperFooter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Border = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 10px 0 10px;
  border-top: 2px solid ${PRIMARY};
`;
