"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisiblityToggle = function (_React$Component) {
    _inherits(VisiblityToggle, _React$Component);

    function VisiblityToggle(props) {
        _classCallCheck(this, VisiblityToggle);

        var _this = _possibleConstructorReturn(this, (VisiblityToggle.__proto__ || Object.getPrototypeOf(VisiblityToggle)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);

        _this.state = {
            show: false
        };

        return _this;
    }

    _createClass(VisiblityToggle, [{
        key: "handleClick",
        value: function handleClick() {
            this.setState(function (prevState) {
                return {
                    show: !prevState.show
                };
            });
            console.log(this.state.show);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Visibilty Toggle"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleClick },
                    !this.state.show ? "Show Details" : "Hide Details"
                ),
                this.state.show && React.createElement(
                    "p",
                    null,
                    "All Details here"
                )
            );
        }
    }]);

    return VisiblityToggle;
}(React.Component);

;

ReactDOM.render(React.createElement(VisiblityToggle, null), document.getElementById('app'));

// const onShowDetails = () => {
//     show=!show;
//     renderToggle();

// } 


// let show = false;
// const template =(
//     <div>
//     <p>Visiblity Toggle</p>
//     <button onClick={onShowDetails}>Show Details</button>
//     </div>)
// const appRoot = document.getElementById("app");

// const renderToggle = () =>{
//     console.log(show);
//     const template =(
// <div>
//     <p>Visiblity Toggle</p>
//     <button onClick={onShowDetails}>{show?"Hide details":"Show Details"}</button>
//     {show && <p>Show all details</p>  }
// </div>)

// ReactDOM.render(template,appRoot);

// };


// renderToggle();
