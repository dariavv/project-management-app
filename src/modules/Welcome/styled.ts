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
  padding: 0 105px 90px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  // height: calc(100vh + 150px);
  transition: 0.7s;
`;

export const Info = styled.section`
  display: flex;
  padding: 0 40px;
  align-items: center;
  margin-bottom: 3rem;
  transition: 0.7s;
  @media ${(props) => props.theme.media.tablet} {
    flex-direction: column;
    margin-bottom: 1rem;
    padding: 0 20px;
  }
  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
    margin-bottom: 1rem;
    padding: 0 20px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;
export const ContainerDescription = styled.div`
  width: 50%;
`;

export const Title = styled.h2`
  font-size: 2.75rem;
  font-weight: bold;
  color: #334154;
`;

export const Description = styled.p`
  // width: 80%;
  // height: auto;
  font-size: 1.35rem;
  transition: 0.3s;
  @media ${(props) => props.theme.media.tablet} {
    font-size: 1.2rem;
    width: 95%;
  }
  @media ${(props) => props.theme.media.phone} {
    font-size: 1rem;
    line-height: 2;
    width: 95%;
  }
`;
export const Teams = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  color: ${PRIMARY};
`;

export const TeamContainer = styled.div`
  display: flex;
  width: 95%;
  justify-content: center;
  align-items: center;
  color: ${DARK};
`;

export const ImgAv = styled.img`
  width: 75%;
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

export const ImgMain = styled.img`
  width: 45%;
  margin: 0.3rem;
  transition: 0.3s;
  @media ${(props) => props.theme.media.tablet} {
    width: 75%;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 60%;
  }
`;

export const NameItem = styled.div`
  font-size: 2.33rem;
`;

export const LinkItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.33rem;
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
  font-size: 2.55rem;
  padding-right: 10px;
`;
