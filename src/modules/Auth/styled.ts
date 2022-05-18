import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form as AntForm } from 'antd';
import { Button } from 'components';

export const ConteinerWrapper = styled.section`
  height: '100vh';
  width: 100%;
  padding-top: 5%;
  padding-bottom: 2%;
  overflow: auto @media (max-width: 1000px) {
    padding-top: 2%;
  }
`;

export const ConteinerForm = styled.section`
  box-sizing: border-box;
  box-shadow: 0px 0px 33px 6px rgba(34, 60, 80, 0.2);
  padding: 10px;
  width: 40%;
  max-width: 700px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: auto @media (max-width: 1000px) {
    margin-top: 5%;
    min-width: 440px;
  }
  @media (max-width: 640px) {
    max-width: 400px;
    min-width: 300px;
  }
`;
export const StyledLink = styled(Link)`
  display: block;
  margin: 10px 0 auto;
  text-align: center;
`;
export const StyledButton = styled(Button)`
  display: block;
  margin: 0 auto;
`;

export const StyledButtonCont = styled(AntForm.Item)`
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  margin-top: 15px;
  max-width: 250px;
  @media (max-width: 1000px) {
    max-width: 200px;
  }
  @media (max-width: 640px) {
    max-width: 150px;
  }
`;
export const StyledFormItem = styled(AntForm.Item)`
  display: block;
  margin: 15px 20px auto;
  @media (max-width: 1000px) {
    max-width: 400px;
  }
  @media (max-width: 640px) {
    max-width: 250px;
  }
`;

export const HeadingWord = styled.h2`
  text-align: center;
`;
