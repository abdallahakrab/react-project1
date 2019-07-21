"use strict";

console.log('App.js is running!');

var app = {
    title: "Indecision",
    subtitle: "This is some info"
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
    React.createElement(
        "p",
        null,
        app.subtitle
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
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Name: ",
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.Location)
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
