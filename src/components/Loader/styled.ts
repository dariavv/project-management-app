import styled from 'styled-components';
import { Spin } from 'antd';

export const Loader = styled(Spin)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
