"use strict";

console.log('App.js is running!');

var app = {
    title: "Indecision",
    subtitle: "This is some info",
    options: ['One', 'Two']
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
};
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
