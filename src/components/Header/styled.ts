import { PRIMARY } from 'constants/colors';
import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  aglin-items: center;
  padding: 20px 40px;
  background-color: ${PRIMARY};
`;

export const Logo = styled.div`
  font-weight: 700;
  color: white;
`;
