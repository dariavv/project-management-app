import { DARK } from 'constants/colors';
import styled from 'styled-components';
import { PRIMARY } from 'constants/colors';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  height: 75px;
  transition: 0.3s;
  @media (max-width: 540px) {
    height: 65px;
    padding: 15px 20px;
  }
`;

export const Container = styled.main`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 150px);
  transition: 0.7s;
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  transition: 0.7s;
  @media ${(props) => props.theme.media.phone} {
    margin-bottom: 2rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const Title = styled.h2`
  font-size: 1.7rem;
  color: ${PRIMARY};
`;

export const Description = styled.p`
  width: 60%;
  height: auto;
  font-size: 1.3rem;
  text-align: center;
  transition: 0.3s;
  @media ${(props) => props.theme.media.tablet} {
    font-size: 1.2rem;
    width: 85%;
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 1rem;
    line-height: 2;
    width: 85%;
  }
`;
export const Teams = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${PRIMARY};
`;

export const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${DARK};
`;

export const ImgAv = styled.img`
  width: 135px;
  border-radius: 50%;
  box-shadow: 0 0 3px ${DARK};
  margin: 0.3rem;
  transition: 0.3s;
  @media ${(props) => props.theme.media.tablet} {
    width: 125px;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 85px;
  }
`;

export const LinkItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.123rem;
  color: ${DARK};
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  font-weight: 500;
  transition: 0.3s;
  a {
    margin-right: 7px;
  }
  @media ${(props) => props.theme.media.phone} {
    padding: 5px 5px;
  }
`;

export const ItemIcon = styled.div`
  font-size: 1.05rem;
  padding-right: 3px;
`;
