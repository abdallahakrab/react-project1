

class Counter extends React.Component {

    constructor(props){
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubOne = this.handleSubOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
            //this.props.startCount
        };
    }


    handleAddOne(){
        
        this.setState( (prevState)=>{
            return {
                count: prevState.count + 1
            }
        }  )

    }

    handleSubOne(){

        this.setState((prevState)=>{
            return {
                count: prevState.count -1
            }
        })
    }

    handleReset(){
        this.setState((
            
        )=>{
            return {
                count:0
            }
        })
    }

    render() {
        return (
            <div>
             <h1>Count: {this.state.count} </h1>
             <button onClick={this.handleAddOne}>+1</button>
             <button onClick={this.handleSubOne}>-1</button>
             <button onClick={this.handleReset}>reset</button>

             
            </div>
        )
    }
};

// Counter.defaultProps = {
//     startCount:0

// }

ReactDOM.render(<Counter />,document.getElementById('app'));
// let count = 0;

// const addOne = () => {count++;
//     renderCounterApp();};
// const subOne = () => {count--;
//     renderCounterApp();};
// const reset = () => {count=0;
//     renderCounterApp();};
    
// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button> 
//         <button onClick={subOne}>-1</button>
//         <button onClick={reset}>Reset</button>



//             </div>);
// ReactDOM.render(templateTwo,appRoot);

// };


// renderCounterApp();