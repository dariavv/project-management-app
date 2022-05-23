import { WHITE, DARK, GREY } from 'constants/colors';
import { TextBold } from 'theme';
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
  @media (max-width: 540px) {
    padding: 5px 20px;
  }
`;

export const TextLink = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  color: ${GREY};
  ${TextBold};
  &:hover {
    box-shadow: 0 0 7px #eee;
  }
`;

export const RSLogo = styled.img`
  width: 90px;
  &:hover {
    width: 95px;
    height: auto;
  }
`;

export const TextFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TextPadding = styled.p`
  margin: 0px;
  padding: 0 5px;
`;
