"use strict";

console.log('App.js is running!');

var app = {
    title: "Indecision",
    subtitle: "This is some info",
    options: []
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title,
        " App!"
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    app.options.length > 0 ? React.createElement(
        "p",
        null,
        " Here are your options "
    ) : React.createElement(
        "p",
        null,
        "no options"
    ),
    React.createElement(
        "ul",
        null,
        React.createElement(
            "li",
            null,
            "First Item"
        ),
        React.createElement(
            "li",
            null,
            "Second Item"
        )
    )
);

var user = {
    name: 'Abdallah',
    age: '21',
    Location: 'X'

};
function getLocation(location) {
    if (location) return React.createElement(
        "p",
        null,
        "Location: ",
        location,
        " "
    );
}
/////////////////////
var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var subOne = function subOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: subOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "Reset"
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
