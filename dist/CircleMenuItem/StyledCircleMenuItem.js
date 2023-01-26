var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from "styled-components";
export var StyledCircleMenuItem = styled.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  visibility: hidden;\n  opacity: 0;\n  transition: var(--CMTransition);\n  z-index: 102;\n\n  ", "\n"], ["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  visibility: hidden;\n  opacity: 0;\n  transition: var(--CMTransition);\n  z-index: 102;\n\n  ", "\n"])), function (_a) {
    var menuActive = _a.menuActive, rotationAngle = _a.rotationAngle, $radius = _a.$radius;
    return menuActive &&
        "\n      transform: translateY(-50%) rotate(".concat(rotationAngle, "deg)\n        translate(").concat($radius, "rem) rotate(").concat(-rotationAngle, "deg);\n      visibility: visible;\n      opacity: 1;\n    ");
});
var templateObject_1;
