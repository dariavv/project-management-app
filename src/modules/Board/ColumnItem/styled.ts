import styled from 'styled-components';
import {
  GREY,
  LIGHTGREY,
  SCROLL_COLOR,
  SCROLL_TRACK,
  SHADOW_BLUE,
  PRIMARY,
} from 'constants/colors';

type InputProps = {
  isVisibleButton: boolean;
};

export const ColumnItem = styled.div`
  min-width: 300px;
  height: calc(100% - 10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${LIGHTGREY};
  margin: 0 20px 0 0;
  padding-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 10px 10px ${SHADOW_BLUE};
  @media ${(props) => props.theme.media.phone} {
    min-width: 280px;
  }
`;

export const ColumnTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin: 5px 0 0 0;
  background-color: ${LIGHTGREY};
  border-radius: 5px 5px 0 0;
  z-index: 3;
  position: sticky;
  top: 0;
  font-weight: 700;
  text-align: justify;
  span {
    width: 100%;
  }
`;

export const TaskContainer = styled.div`
  width: 277px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow-y: auto;
  @media (max-width: 540px) {
    width: 257px;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: 5px 5px 5px -5px ${SCROLL_TRACK} inset;
    background-color: ${SCROLL_COLOR};
    border-radius: 15px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background: ${GREY};
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  font-weight: 700;
  width: 100%;
  &:focus {
    outline: none;
    border-bottom: 1px solid ${GREY};
  }
`;

export const IconItemContainer = styled.div`
  font-size: 0.8rem;
  padding: 0.2rem;
  z-index: 7;
  &:hover {
    transition: 0.3s;
    svg {
      fill: ${PRIMARY};
    }
  }
`;

export const ToggleInputBtn = styled.div<InputProps>`
  display: flex;
  transition: 0.3s;
  display: ${({ isVisibleButton }) => (isVisibleButton ? `flex` : `none`)}; ;
`;

export const ToggleColumnBtn = styled.div<InputProps>`
  display: flex;
  transition: 0.3s;
  display: ${({ isVisibleButton }) => (isVisibleButton ? `none` : `flex`)}; ;
`;
