import styled from 'styled-components';
import { Button as AntButton } from 'antd';

export const Button = styled(AntButton)<{ color?: string; bgc?: string }>`
  ${({ color }) => color && `color: ${color} !important`}
  ${({ bgc }) => bgc && `background-color: ${bgc} !important`}
`;
