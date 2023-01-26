var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var StyledCircleButton = function (tag) { return styled(tag)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: var(--CMBorderColor);\n  background: var(--CMBackgroundColor);\n  text-decoration: none;\n  color: var(--CMTextColor);\n  border-radius: var(--CMRadius);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: unset;\n  padding: var(--CMPadding);\n  transition: var(--CMTransition);\n  ", "\n\n  &:is(:hover, :focus, :active) {\n    color: var(--CMTexteActiveColor);\n    background: var(--CMBackgroundActiveColor);\n  }\n"], ["\n  border: var(--CMBorderColor);\n  background: var(--CMBackgroundColor);\n  text-decoration: none;\n  color: var(--CMTextColor);\n  border-radius: var(--CMRadius);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-sizing: unset;\n  padding: var(--CMPadding);\n  transition: var(--CMTransition);\n  ", "\n\n  &:is(:hover, :focus, :active) {\n    color: var(--CMTexteActiveColor);\n    background: var(--CMBackgroundActiveColor);\n  }\n"])), function (_a) {
    var $size = _a.$size;
    return "\n    width: ".concat($size, "rem;\n    height: ").concat($size, "rem;\n  ");
}); };
export var StyledDiv = StyledCircleButton("div");
export var StyledLink = StyledCircleButton("a");
var templateObject_1;
