"use strict";

console.log("Hello");
var onShowDetails = function onShowDetails() {
    show = !show;
    renderToggle();
};

var show = false;
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "p",
        null,
        "Visiblity Toggle"
    ),
    React.createElement(
        "button",
        { onClick: onShowDetails },
        "Show Details"
    )
);
var appRoot = document.getElementById("app");

var renderToggle = function renderToggle() {
    console.log(show);
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            "Visiblity Toggle"
        ),
        React.createElement(
            "button",
            { onClick: onShowDetails },
            show ? "Hide details" : "Show Details"
        ),
        show && React.createElement(
            "p",
            null,
            "Show all details"
        )
    );

    ReactDOM.render(template, appRoot);
};

renderToggle();
