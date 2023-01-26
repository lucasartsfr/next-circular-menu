var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled, { css } from "styled-components";
import { CircleButton } from "../CircleButton/CircleButton";
export var StyledCircleMenuBurgerBar = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  width: 1.2em;\n  height: 0.2rem;\n  background: var(--CMBurgerBg);\n  margin-bottom: 0.3em;\n  border-radius: var(--CMBurgerRadius);\n  transition: var(--CMTransition);\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  display: block;\n  width: 1.2em;\n  height: 0.2rem;\n  background: var(--CMBurgerBg);\n  margin-bottom: 0.3em;\n  border-radius: var(--CMBurgerRadius);\n  transition: var(--CMTransition);\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])));
export var StyledCircleMenuToggle = styled(CircleButton)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  flex-direction: column;\n  z-index: 103;\n\n  &:is(:hover, :focus, :active) > ", " {\n    background: var(--CMBurgerActiveBg);\n  }\n\n  ", "\n"], ["\n  position: relative;\n  flex-direction: column;\n  z-index: 103;\n\n  &:is(:hover, :focus, :active) > ", " {\n    background: var(--CMBurgerActiveBg);\n  }\n\n  ", "\n"])), StyledCircleMenuBurgerBar, function (_a) {
    var menuActive = _a.menuActive;
    return menuActive && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      ", ":nth-child(1) {\n        transform: translate(-0.1em, 0.17em) rotateZ(-40deg);\n        width: 1.2em;\n      }\n      ", ":nth-child(2) {\n        opacity: 0;\n      }\n      ", ":nth-child(3) {\n        transform: translate(-0.1em, -0.17em) rotateZ(40deg);\n        width: 1.2em;\n      }\n    "], ["\n      ", ":nth-child(1) {\n        transform: translate(-0.1em, 0.17em) rotateZ(-40deg);\n        width: 1.2em;\n      }\n      ", ":nth-child(2) {\n        opacity: 0;\n      }\n      ", ":nth-child(3) {\n        transform: translate(-0.1em, -0.17em) rotateZ(40deg);\n        width: 1.2em;\n      }\n    "])), StyledCircleMenuBurgerBar, StyledCircleMenuBurgerBar, StyledCircleMenuBurgerBar);
});
var templateObject_1, templateObject_2, templateObject_3;
