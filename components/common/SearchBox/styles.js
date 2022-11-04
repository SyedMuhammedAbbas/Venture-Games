import styled, { css, keyframes } from "styled-components";
import SearchIcon from "./icons/search";
import ArrowRightIcon from "./icons/arrowRight";

export const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 50px;
  border: 3px solid brown;
  padding: 5px;
  background: #ffffff;
  transition: all 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 300px;
      -webkit-box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);
      box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.5);
      border: 3px solid brown;
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  top: 2;
  left: 0;
  width: 90%;
  height: 40px;
  line-height: auto;
  outline: 0;
  border: 0;
  font-size: 1.5rem;
  border-radius: 20px;
  padding: 0 20px;
  margin: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

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
  height: 1.25rem;
  width: 1.25rem;
  fill: black;
  z-index: 10;
  animation: ${fadeIn} 1s linear;
`;

export const IconMagnifyingGlass = styled(SearchIcon)`
  ${IconCommonCss}
`;

export const IconRightArrow = styled(ArrowRightIcon)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: brown;
  }
`;
