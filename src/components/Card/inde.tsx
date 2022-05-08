import styled from 'styled-components';
import { Card as AntCard } from 'antd';

export const Card = styled(AntCard)<{ color?: string; bgc?: string }>`
  ${({ color }) => color && `color: ${color} !important`}
  ${({ bgc }) => bgc && `background-color: ${bgc} !important`}
`;
