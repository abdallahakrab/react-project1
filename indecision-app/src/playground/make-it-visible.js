class VisiblityToggle extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            show: false
        };

        
    }
    
    handleClick(){
       this.setState((prevState) =>{
           return {
               show: !prevState.show 
           }
       })  
       ;
        console.log(this.state.show);
    }
    render(){
        return (
            <div>
             <h1>Visibilty Toggle</h1>
             <button onClick={this.handleClick}>{!this.state.show?"Show Details":"Hide Details"}</button>
             {this.state.show && <p>All Details here</p>}
            </div>
        )
    }
};

ReactDOM.render(<VisiblityToggle/>,document.getElementById('app'));



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