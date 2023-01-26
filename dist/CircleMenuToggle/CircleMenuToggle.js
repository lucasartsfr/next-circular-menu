import React from "react";
import { StyledCircleMenuToggle, StyledCircleMenuBurgerBar, } from "./StyledCircleMenuToggle";
export var CircleMenuToggle = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 1 : _b, _c = _a.menuActive, menuActive = _c === void 0 ? false : _c, className = _a.className, toggleMenu = _a.toggleMenu;
    return (React.createElement(StyledCircleMenuToggle, { className: className, onClick: toggleMenu, menuActive: menuActive, size: size },
        React.createElement(StyledCircleMenuBurgerBar, null),
        React.createElement(StyledCircleMenuBurgerBar, null),
        React.createElement(StyledCircleMenuBurgerBar, null)));
};
