import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form as AntForm } from 'antd';
import { Button as AntButton } from 'antd';
import { DARK } from 'constants/colors';

export const ConteinerWrapper = styled.main`
  height: calc(100vh - 75px);
  width: 100%;
  position: relative;
`;

export const ConteinerForm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 33px 6px rgba(34, 60, 80, 0.2);
  padding: 10px;
  width: 35%;
  border-radius: 5px;
  @media (max-width: 1000px) {
    min-width: 440px;
  }
  @media (max-width: 640px) {
    max-width: 400px;
    min-width: 300px;
  }
`;
export const Line = styled.hr`
  margin: 0 auto 10px;
  padding: 0;
  height: 20px;
  border: none;
  border-bottom: 1px solid #1f1209;
  box-shadow: 0 20px 20px -20px #333;
  width: 85%;
`;
export const StyledP = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
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
  // margin: 0 !important;
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
    max-width: 400px;
  }
  @media (max-width: 640px) {
    max-width: 250px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: ${DARK};
  margin: 7px 0 0 0;
`;
