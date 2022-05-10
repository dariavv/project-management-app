import styled from 'styled-components';
import { Card as AntCard } from 'antd';

export const Cards = styled(AntCard)<{ color?: string; bgc?: string; w: string }>`
  ${({ color }) => color && `color: ${color} !important`}
  ${({ bgc }) => bgc && `background-color: ${bgc} !important`}
  ${({ w }) => w && `background-color: ${w} !important`}
`;
