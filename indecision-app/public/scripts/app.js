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

//challenge :exploring JSX :
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name: Abdallah Akrab'
    ),
    React.createElement(
        'p',
        null,
        'Age: 21'
    ),
    React.createElement(
        'p',
        null,
        'Location: '
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
