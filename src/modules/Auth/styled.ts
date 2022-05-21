import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form as AntForm } from 'antd';
import { Button } from 'components';

export const ConteinerWrapper = styled.main`
  height: calc(100vh - 75px);
  width: 100%;
  padding-top: 5%;
  padding-bottom: 2%;
  overflow: auto;
  @media (max-width: 1000px) {
    padding-top: 2%;
  }
`;

export const ConteinerForm = styled.div`
  box-sizing: border-box;
  box-shadow: 0px 0px 33px 6px rgba(34, 60, 80, 0.2);
  padding: 10px;
  width: 40%;
  max-width: 700px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: auto;
  @media (max-width: 1000px) {
    margin-top: 5%;
    min-width: 440px;
  }
  @media (max-width: 640px) {
    max-width: 400px;
    min-width: 300px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 15px 15px;
`;

export const StyledButton = styled(Button)`
  width: 100% !important;
  margin-bottom: 15px !important;
`;

export const StyledButtonCont = styled(AntForm.Item)`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const Title = styled.h2`
  text-align: center;
`;
