import styled from "styled-components";

interface Props {
  $size: number;
}

export const StyledCircleButton = <T extends "a" | "button" | "div">(tag: T) => styled(
  tag
)<Props>`
  border: var(--CMBorderColor);
  background: var(--CMBackgroundColor);
  text-decoration: none;
  color: var(--CMTextColor);
  border-radius: var(--CMRadius);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: unset;
  padding: var(--CMPadding);
  transition: var(--CMTransition);
  ${({ $size }) => `
    width: ${$size}rem;
    height: ${$size}rem;
  `}

  &:is(:hover, :focus, :active) {
    color: var(--CMTexteActiveColor);
    background: var(--CMBackgroundActiveColor);
  }
`;

export const StyledDiv = StyledCircleButton("div");
export const StyledLink = StyledCircleButton("a");
