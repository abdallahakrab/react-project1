'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision App'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                disabled: props.NoOptions,
                onClick: props.pick },
            'What should I learn today?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Options will be here'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOption: props.handleDeleteOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }
            },
            'Remove'
        )
    );
};

var Add = function (_React$Component) {
    _inherits(Add, _React$Component);

    function Add(props) {
        _classCallCheck(this, Add);

        var _this = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.state = {
            error: undefined
        };
        return _this;
    }

    _createClass(Add, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.text.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            }); // == to {error: error} , es6 shorthand


            e.target.elements.text.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    React.createElement('input', { name: 'text', type: 'text' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return Add;
}(React.Component);

var RemoveAll = function RemoveAll(props) {
    return React.createElement(
        'button',
        { onClick: props.propRemoveAll },
        'Remove All'
    );
};

var IndecisionApp = function (_React$Component2) {
    _inherits(IndecisionApp, _React$Component2);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this2 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this2.handleRemoveAll = _this2.handleRemoveAll.bind(_this2);
        _this2.handlePick = _this2.handlePick.bind(_this2);
        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.handleDeleteOption = _this2.handleDeleteOption.bind(_this2);
        _this2.state = {
            options: _this2.props.defaultOptions
        };
        return _this2;
    }

    _createClass(IndecisionApp, [{
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomIndex = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomIndex]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {

            if (!option) {
                return "Enter a valid input";
            } else if (this.state.options.indexOf(option) > -1) return "This item already exists";

            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            }); // == to else clause ! 

        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(option) {

            this.setState(function (prevState) {
                return { options: prevState.options.filter(function (element) {
                        return element != option;
                    }) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: 'let the computer decide what you learn today' }),
                React.createElement(Add, {
                    handleAddOption: this.handleAddOption //giving access and we will call it in child 
                }),
                React.createElement(RemoveAll, { options: this.state.options, propRemoveAll: this.handleRemoveAll }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(Action, {
                    NoOptions: this.state.options.length == 0,
                    pick: this.handlePick

                })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log("Hello component");
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log("component updated");
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("goodbye component");
        }
    }]);

    return IndecisionApp;
}(React.Component);

;
IndecisionApp.defaultProps = {
    defaultOptions: []
};

ReactDOM.render(React.createElement(IndecisionApp, { defaultOptions: ["React", "Angular", "Vue"] }), document.getElementById('app'));
