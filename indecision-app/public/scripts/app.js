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
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
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
