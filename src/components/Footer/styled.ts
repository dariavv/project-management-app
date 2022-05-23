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
  transition: 0.7s;
  @media (max-width: 540px) {
    padding: 5px 20px;
  }
`;

export const TextLink = styled.div`
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 50%;
  z-index: 99;
  color: ${GREY};
  ${TextBold};
  &:hover {
    background-color: #eeeeee4f;
    box-shadow: 0 0 7px #eeeeee4f;
  }
`;

export const RSLogo = styled.img`
  width: 80px;
  @media ${(props) => props.theme.media.phone} {
    width: 55px;
  }
`;

export const TextSize = styled.p`
  margin: 0;
  @media ${(props) => props.theme.media.phone} {
    font-size: 1rem;
  }
`;
