

class Counter extends React.Component {

    constructor(props){
        super(props);

        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubOne = this.handleSubOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }


    handleAddOne(){
        console.log("addone");
    }

    handleSubOne(){
        console.log("subone");
    }

    handleReset(){
        console.log("reset");
    }

    render() {
        return (
            <div>
             <h1>Count: </h1>
             <button onClick={this.handleAddOne}>+1</button>
             <button onClick={this.handleSubOne}>-1</button>
             <button onClick={this.handleReset}>reset</button>

             
            </div>
        )
    }
};

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