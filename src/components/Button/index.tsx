import styled from 'styled-components';
import { Button as AntButton } from 'antd';

export const Button = styled(AntButton)<{ color?: string; bgc?: string; m?: string; br?: string }>`
  ${({ color }) => color && `color: ${color} !important`}
  ${({ bgc }) => bgc && `background-color: ${bgc} !important`}
  ${({ m }) => m && `margin: ${m} !important`}
  ${({ br }) => br && `border-radius: ${br} !important`}
`;
