export var buttonA11yProps = function (onClick) { return ({
    role: "button",
    tabIndex: 0,
    onKeyPress: function (keyboardEvent) {
        if (["Enter", " ", "SpaceBar"].includes(keyboardEvent.key)) {
            keyboardEvent.preventDefault();
            onClick();
        }
    },
}); };
