import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form as AntForm } from 'antd';
import { Button as AntButton } from 'antd';
import { DARK } from 'constants/colors';

export const ConteinerWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 150px);
  overflow-y: auto;
  @media (max-width: 540px) {
    min-height: calc(100vh - 120px);
  }
`;

export const ConteinerForm = styled.div`
  box-shadow: 0px 0px 33px 6px rgba(34, 60, 80, 0.2);
  padding: 10px;
  width: 40%;
  max-width: 700px;
  border-radius: 5px;
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
  font-weight: bold;
  margin-top: 10px;
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
  margin: 10px 0 0 0;
  @media (max-width: 540px) {
    font-size: 1.45rem;
  }
`;
