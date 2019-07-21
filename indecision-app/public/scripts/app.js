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

var user = {
    name: 'Abdallah',
    age: '21',
    location: 'X'

};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Name: ',
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location,
        ' '
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
