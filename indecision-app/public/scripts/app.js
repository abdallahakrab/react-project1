"use strict";

console.log('App.js is running!');

var app = {
    title: "Indecision",
    subtitle: "This is some info",
    options: []
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderSubmitForm();
    }
};

var clickRemoveAll = function clickRemoveAll() {
    app.options = [];
    renderSubmitForm();
};

// const user = {
//     name: 'Abdallah',
//     age: '21',
//     Location: 'X'
// };
// function getLocation(location){
//     if(location)
//     return <p>Location: {location} </p> ;

// };
var appRoot = document.getElementById('app');
var renderSubmitForm = function renderSubmitForm() {
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
        ),
        React.createElement(
            "button",
            { onClick: clickRemoveAll },
            "Remove all"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Submit"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
renderSubmitForm();
