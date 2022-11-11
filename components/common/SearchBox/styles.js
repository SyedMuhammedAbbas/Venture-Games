import styled, { css, keyframes } from "styled-components";
import SearchIcon from "./icons/search";
import ArrowRightIcon from "./icons/arrowRight";

export const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 0px;
  padding: 5px;
  background: transparent;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 500px;
      border-bottom: 3px solid #ffffff;
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 2;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: auto;
  outline: 0;
  border: 0;
  font-size: 1.6rem;
  border-radius: 20px;
  color: white;
  padding: 0 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: transparent;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1.5rem;
  width: 1.5rem;
  fill: white;
  z-index: 10;
  animation: ${fadeIn} 0.5s linear;
`;

export const IconMagnifyingGlass = styled(SearchIcon)`
  ${IconCommonCss}
`;

export const IconRightArrow = styled(ArrowRightIcon)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: white;
  }
`;
