import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Form, Input } from 'antd';

export const StyledForm = styled.section`
  box-sizing: border-box;
  box-shadow: 0px 0px 33px 6px rgba(34, 60, 80, 0.2);
  padding: 10px;
  width: 40%;
  max-width: 500px;
  margin: 2% auto;
  // border: 1px solid black;
  border-radius: 5px;
  @media (max-width: 1000px) {
    min-width: 440px;
  }
  @media (max-width: 640px) {
    max-width: 400px;
    min-width: 250px;
  }
`;
export const StyledLink = styled(Link)`
  display: block;
  margin: 10px 0 auto;
  text-align: center;
`;
export const StyledButtonCont = styled(Form.Item)`
  margin: 0 auto;
  @media (max-width: 1000px) {
    max-width: 200px;
  }
  @media (max-width: 640px) {
    max-width: 100px;
  }
`;
export const StyledFormItem = styled(Form.Item)`
  margin: 5px;
  @media (max-width: 1000px) {
    max-width: 400px;
  }
  @media (max-width: 640px) {
    max-width: 250px;
  }
`;
export const StyledPassInput = styled(Input.Password)`
  margin: 5px;
  @media (max-width: 1000px) {
    max-width: 90%;
  }
  @media (max-width: 640px) {
    max-width: 90%;
  }
`;
export const StyledInput = styled(Input)`
  margin-left: 5px;
  @media (max-width: 1000px) {
    max-width: 90%;
  }
  @media (max-width: 640px) {
    max-width: 90%;
  }
`;

export const StyledHeadingWord = styled.h2`
  text-align: center;
`;
