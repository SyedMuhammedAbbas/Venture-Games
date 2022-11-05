import { useEffect, useRef, useState } from "react";
import {
  Container,
  SearchInput,
  IconRightArrow,
  IconMagnifyingGlass,
} from "./styles";

export default function Search({ searchResult, setSearchResult }) {
  const targetRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;

  const [val, setVal] = useState("");

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchit();
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  function searchit() {
    // window.location.href = "https://duckduckgo.com/?q=" + val , target="_blank";
    window.open("https://duckduckgo.com/?q=" + val, "_blank");
  }

  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      hover={showSearchInput}
    >
      <SearchInput
        value={searchResult}
        onChange={(e) => setSearchResult(e.target.value)}
        ref={targetRef}
        showSearchInput={showSearchInput}
      />
      {!showSearchInput && <IconMagnifyingGlass onClick="none" />}
    </Container>
  );
}
