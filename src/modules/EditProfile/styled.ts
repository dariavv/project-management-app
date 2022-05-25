import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form as AntForm } from 'antd';
import { Button as AntButton } from 'antd';
import { DARK } from 'constants/colors';

export const ConteinerWrapper = styled.main`
  width: 100%;
  height: calc(100vh -75px);
  padding-top: 5%;
  padding-bottom: 2%;
  overflow: auto @media (max-width: 1000px) {
    padding-top: 2%;
  }
`;

export const ConteinerForm = styled.div`
  box-shadow: 0px 0px 33px 6px rgba(34, 60, 80, 0.2);
  padding: 10px;
  width: 40%;
  max-width: 700px;
  margin: 0 auto;
  border-radius: 5px;
  overflow: auto;
  margin-bottom: 75px;
  @media (max-width: 1000px) {
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
  margin: 0 0 15px 0;
`;

export const StyledButton = styled(AntButton)`
  width: 100% !important;
  margin: 0 !important;
`;
export const DeleteButton = styled(AntButton)`
  width: 100% !important;
  color: #bf4d4d;
  font-weight: bold;
  border-color: #a87b7b;
  background-color: #f0eded;
  margin-top: 10px;
  &:hover {
    border-color: #f0eded;
    color: #f0eded;
    background-color: #bf4d4d;
  }
  &:focus {
    border-color: #f0eded;
    color: #f0eded;
    background-color: #bf4d4d;
  }
`;

export const StyledButtonCont = styled(AntForm.Item)`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px auto 20px;
  max-width: 250px;
`;

export const StyledFormItem = styled(AntForm.Item)`
  display: block;
  margin: 15px 20px auto;
  @media (max-width: 1000px) {
    margin: 10px 15px auto;
    max-width: 400px;
  }
  @media (max-width: 640px) {
    max-width: 250px;
    margin: 6px 15px auto;
  }
`;

export const Title = styled.h3`
  text-align: center;
  color: ${DARK};
  margin: 5px 0 0 0;
`;
