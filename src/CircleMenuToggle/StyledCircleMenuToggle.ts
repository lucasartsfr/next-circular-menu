import styled, { css } from "styled-components";
import { CircleButton } from "../CircleButton/CircleButton";

export const StyledCircleMenuBurgerBar = styled.div`
  display: block;
  width: 1.2em;
  height: 0.2rem;
  background: var(--CMBurgerBg);
  margin-bottom: 0.3em;
  border-radius: var(--CMBurgerRadius);
  transition: var(--CMTransition);

  &:last-child {
    margin-bottom: 0;
  }
`;

interface Props {
  menuActive: boolean;
}

export const StyledCircleMenuToggle = styled(CircleButton)<Props>`
  position: relative;
  flex-direction: column;
  z-index: 103;

  &:is(:hover, :focus, :active) > ${StyledCircleMenuBurgerBar} {
    background: var(--CMBurgerActiveBg);
  }

  ${({ menuActive }) =>
    menuActive &&
    css`
      ${StyledCircleMenuBurgerBar}:nth-child(1) {
        transform: translate(-0.1em, 0.17em) rotateZ(-40deg);
        width: 1.2em;
      }
      ${StyledCircleMenuBurgerBar}:nth-child(2) {
        opacity: 0;
      }
      ${StyledCircleMenuBurgerBar}:nth-child(3) {
        transform: translate(-0.1em, -0.17em) rotateZ(40deg);
        width: 1.2em;
      }
    `}
`;
