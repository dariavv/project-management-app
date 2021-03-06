import styled from 'styled-components';
import { Button as AntButton } from 'antd';

export const Button = styled(AntButton)<{
  color?: string;
  bgc?: string;
  m?: string;
  br?: string;
  p?: string;
}>`
  ${({ color }) => color && `color: ${color} !important`}
  ${({ bgc }) => bgc && `background-color: ${bgc} !important`}
  margin: ${({ m }) => (m ? m : '0 0 0 7px')} !important;
  ${({ br }) => br && `border-radius: ${br} !important`}
  ${({ p }) => p && `padding: ${p} !important`}
`;
