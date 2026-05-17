import { Component } from "solid-js";
import { GlazeWmOutput } from "zebar";
import { useAnimatedClick } from "../hooks/useAnimatedClick";
import "./style.css";

interface SearchButtonProps {
  glazewm: GlazeWmOutput;
}

const SearchButton: Component<SearchButtonProps> = (props) => {
  const { isActive, handleClick } = useAnimatedClick();

  const handleSearchClick = () => {
    handleClick();
    props.glazewm.runCommand(
      "shell-exec %userprofile%/.glzr/zebar/bar/bar/dist/assets/scripts/OpenWindowsSearch.ahk",
    );
  };
  return (
    <button
      class={`search ${isActive() ? "clicked-animated" : ""}`}
      onclick={handleSearchClick}
    >
      <span class="content">
        <img src="./assets/icons/search-32.png" width="19" height="19"></img>
      </span>
    </button>
  );
};

export default SearchButton;
