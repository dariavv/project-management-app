import { WHITE, DARK, GREY } from 'constants/colors';
import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 40px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 75px;
  background-color: ${DARK};
  color: ${WHITE};
  transition: 0.7s;
  @media (max-width: 540px) {
    padding: 5px 20px;
    height: 60px;
  }
`;

export const IconContainer = styled.div`
  font-size: 2.3rem;
  z-index: 4;
  color: ${GREY};
  &:hover {
    transition: 0.3s;
    svg {
      fill: ${WHITE};
    }
  }
`;

export const RSLogo = styled.img`
  width: 80px;
  @media ${({ theme }) => theme.media.phone} {
    width: 60px;
  }
`;

export const Copyright = styled.span`
  margin: 0 22px 0 0;
  @media ${({ theme }) => theme.media.tablet} {
    font-size: 1.12rem;
  }
  @media ${({ theme }) => theme.media.phone} {
    font-size: 1.15rem;
  }
`;
