"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "p",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component2) {
    _inherits(Action, _React$Component2);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    {
                        disabled: this.props.NoOptions,
                        onClick: this.props.pick },
                    "What should I learn today?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "Options will be here"
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, optionText: option });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component4) {
    _inherits(Option, _React$Component4);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.props.optionText
            );
        }
    }]);

    return Option;
}(React.Component);

var Add = function (_React$Component5) {
    _inherits(Add, _React$Component5);

    function Add(props) {
        _classCallCheck(this, Add);

        var _this5 = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

        _this5.handleSubmit = _this5.handleSubmit.bind(_this5);
        _this5.state = {
            error: undefined
        };
        return _this5;
    }

    _createClass(Add, [{
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.text.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error // == to {error: error} , es6 shorthand
                };
            });

            e.target.elements.text.value = '';
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleSubmit },
                    React.createElement("input", { name: "text", type: "text" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return Add;
}(React.Component);

var RemoveAll = function (_React$Component6) {
    _inherits(RemoveAll, _React$Component6);

    function RemoveAll() {
        _classCallCheck(this, RemoveAll);

        return _possibleConstructorReturn(this, (RemoveAll.__proto__ || Object.getPrototypeOf(RemoveAll)).apply(this, arguments));
    }

    _createClass(RemoveAll, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "button",
                { onClick: this.props.propRemoveAll },
                "Remove All"
            ); //Mehtod 1 to bind this to event handlers 
        }
    }]);

    return RemoveAll;
}(React.Component);

var IndecisionApp = function (_React$Component7) {
    _inherits(IndecisionApp, _React$Component7);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this7 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this7.handleRemoveAll = _this7.handleRemoveAll.bind(_this7);
        _this7.handlePick = _this7.handlePick.bind(_this7);
        _this7.handleAddOption = _this7.handleAddOption.bind(_this7);
        _this7.state = {
            options: []
        };
        return _this7;
    }

    _createClass(IndecisionApp, [{
        key: "handleRemoveAll",
        value: function handleRemoveAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var x = Math.floor(Math.random() * this.state.options.length);
            console.log(this.state.options[x]);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {

            if (!option) {
                return "Enter a valid input";
            } else if (this.state.options.indexOf(option) > -1) return "This item already exists";
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: "Indecision App", subtitle: "let the computer decide what you learn today" }),
                React.createElement(Add, {
                    handleAddOption: this.handleAddOption //giving access and we will call it in child 
                }),
                React.createElement(RemoveAll, { options: this.state.options, propRemoveAll: this.handleRemoveAll }),
                React.createElement(Options, { options: this.state.options }),
                React.createElement(Action, {
                    NoOptions: this.state.options.length == 0,
                    pick: this.handlePick

                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
