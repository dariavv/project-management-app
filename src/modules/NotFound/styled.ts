import { GREY, PRIMARY } from 'constants/colors';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerNotFound = styled.section`
  height: 100vh;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const NotFoundTop = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const NotFoundTopInner = styled.section`
  background-image: url(/404-bg.png);
  background-position: center;
  background-size: auto 60%;
  background-repeat: no-repeat;
`;
export const NFHeading = styled.h1`
  color: ${GREY};
  font-size: 10.5vh;
  line-height: 10.5vh;
  font-weight: 400;
  text-transform: uppercase;
`;
export const NFText = styled.p`
  color: ${GREY};
  font-size: 4.71vh;
  line-height: 7.35vh;
  font-weight: 400;
  margin: 2vh 0 3vh;
`;
export const StyledLink = styled(Link)`
  color: ${PRIMARY};
  font-size: 3.71vh;
  line-height: 4.35vh;
`;
export const NotFoundImg = styled.img`
  background-image: url(/NotFound.jpg);
  background-position: center;
  background-size: auto 90%;
  background-repeat: no-repeat;
  width: 90%;
  height: 90%;
  margin: 0 auto;
`;
export const ConteinerNotFoundImg = styled.div`
  width: 100%;
  height: 35vh;
  margin: 0 auto;
`;
