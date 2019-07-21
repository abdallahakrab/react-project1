'use strict';

console.log('App.js is running!');

var template = React.createElement(
    'div',
    null,
    '                                                        ',
    React.createElement(
        'h1',
        null,
        'Indecision App!'
    ),
    React.createElement(
        'p',
        null,
        'Welcome'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'First Item'
        ),
        React.createElement(
            'li',
            null,
            'Second Item'
        )
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
