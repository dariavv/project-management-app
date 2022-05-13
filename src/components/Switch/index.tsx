import styled from 'styled-components';
import { Switch as AntSwitch } from 'antd';

export const Switch = styled(AntSwitch)<{ color?: string; bgc?: string; m?: string }>`
  ${({ color }) => color && `color: ${color}`}
  ${({ bgc }) => bgc && `background: ${bgc}`}
  ${({ m }) => m && `background: ${m}`}
`;
