var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { Children, cloneElement, useState, } from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import { CircleMenuItem, } from "../CircleMenuItem/CircleMenuItem";
import { CircleMenuToggle } from "../CircleMenuToggle/CircleMenuToggle";
import { StyledCircleMenuData } from "./StyledCircleMenu";
export var CircleMenu = function (_a) {
    var _b = _a.rotationAngleInclusive, rotationAngleInclusive = _b === void 0 ? true : _b, _c = _a.radius, radius = _c === void 0 ? 2 : _c, _d = _a.itemSize, itemSize = _d === void 0 ? 2 : _d, className = _a.className, menuToggleElement = _a.menuToggleElement, menuToggleClassName = _a.menuToggleClassName, onMenuToggle = _a.onMenuToggle, props = __rest(_a, ["rotationAngleInclusive", "radius", "itemSize", "className", "menuToggleElement", "menuToggleClassName", "onMenuToggle"]);
    var _e = useState(false), menuActive = _e[0], setMenuActive = _e[1];
    var childrenCount = Children.count(props.children);
    var itemCount = rotationAngleInclusive ? childrenCount - 1 : childrenCount;
    var toggleMenu = function () {
        console.log("Toogle Bis");
        var updatedMenuState = !menuActive;
        setMenuActive(updatedMenuState);
        onMenuToggle === null || onMenuToggle === void 0 ? void 0 : onMenuToggle(updatedMenuState);
    };
    var menuToggle = menuToggleElement ? (cloneElement(menuToggleElement, {
        onClick: function () {
            var _a, _b;
            console.log("Toogle");
            (_b = (_a = menuToggleElement.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a);
            toggleMenu();
        },
    })) : (React.createElement(CircleMenuToggle, { className: menuToggleClassName, menuActive: menuActive, size: itemSize, toggleMenu: toggleMenu }));
    return (React.createElement(Backdrop, { className: className, active: menuActive, onClick: toggleMenu },
        menuToggle,
        React.createElement(StyledCircleMenuData, null, Children.map(props.children, function (child, index) {
            // Calculating angle
            var angle = props.startAngle;
            var increment = 0;
            if (childrenCount > 1) {
                increment = Math.round(props.rotationAngle / itemCount);
            }
            angle += index * increment;
            return (React.createElement(CircleMenuItem, __assign({ key: "cm-item-" + index }, child.props, { size: itemSize, menuActive: menuActive, radius: radius, rotationAngle: angle })));
        }))));
};
