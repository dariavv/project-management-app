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
  align-items: center;
  flex-direction: column;
  background-color: ${LIGHTGREY};
  margin: 0 20px 0 0;
  padding-bottom: 15px;
  border-radius: 5px;
  box-shadow: 0 10px 10px ${SHADOW_BLUE};
  transition: 0.7s;
  @media ${(props) => props.theme.media.phone} {
    min-width: 280px;
  }
`;

export const ColumnTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  background-color: ${LIGHTGREY};
  border-radius: 5px 5px 0 0;
  z-index: 3;
  position: sticky;
  top: 0;
  font-weight: 700;
  text-align: justify;
`;

export const TaskContainer = styled.div`
  overflow-y: auto;
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
