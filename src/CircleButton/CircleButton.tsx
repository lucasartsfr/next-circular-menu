import React, { CSSProperties, FC, MouseEvent, ReactNode } from "react";
import { TooltipPlacement } from "../Tooltip/library/types";
import { StyledLink, StyledDiv } from "./StyledCircleButton";

export interface CircleButtonProps {
  size: number;
  link?: string;
  tooltip?: string;
  tooltipPlacement?: TooltipPlacement;
  target?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: (e?: MouseEvent<HTMLElement>) => void;
  children: ReactNode;
}

export const CircleButton: FC<CircleButtonProps> = (props) => {
  const {
    link,
    target,
    tooltip,
    tooltipPlacement,
    onClick,
    size,
    ...commonProps
  } = props;

  return link ? (
    <StyledLink {...commonProps} $size={size} href={link} target={target} />
  ) : (
    <StyledDiv {...commonProps} $size={size} onClick={onClick} />
  );
};
