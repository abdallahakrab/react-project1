
const Header = (props) => {
    return (
        <div>
         <h1>{props.title}</h1>
         {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )

   
};

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) =>
{
    return(
        <div>
         <button
         disabled={props.NoOptions}
         onClick={props.pick}>
         What should I learn today?
         </button>
        </div>
    )
}



const Options = (props) =>{
    return (
        <div>
         <p>Options will be here</p>
         {props.options.map(option =>
            <Option 
             key={option}
             optionText = {option} 
             handleDeleteOption={props.handleDeleteOption}
             /> )}
        </div>
    )
}


const Option = (props) => {
    return (
        <div>
        {props.optionText}
        <button
         onClick={(e) =>{
             props.handleDeleteOption(props.optionText);
         }}
         >
        Remove
        </button>
        </div>)
}



class Add extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.state = {
            error: undefined
        }
    }
    
    handleSubmit(e){
        e.preventDefault();
        const option = e.target.elements.text.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>({error})); // == to {error: error} , es6 shorthand
             
         
        
        e.target.elements.text.value = '';
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleSubmit}>
                <input name="text" type="text"></input>
                <button >Add Option</button>
            </form>
            </div>
            
        );
    }
}

const RemoveAll = (props) => {
    return <button onClick={props.propRemoveAll}>Remove All</button>
}


class IndecisionApp extends  React.Component {

    constructor(props){
        super(props);
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: this.props.defaultOptions
        };
    };  

    handleRemoveAll() {
        this.setState(() => ({options: []}));
    };

    handlePick(){
        let randomIndex = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomIndex]);
    };

    handleAddOption(option){

        if(!option){
            return "Enter a valid input";
        }
        else if(this.state.options.indexOf(option) > -1)
            return "This item already exists";

        this.setState((prevState)=> ({options: prevState.options.concat(option)}));         // == to else clause ! 
            

    }

    handleDeleteOption(option) {

        this.setState( prevState => ({options: prevState.options.filter(element => element != option)})) ;
        
    }

    render(){
        return (
        <div>
            <Header  subtitle="let the computer decide what you learn today" />
            <Add 
             handleAddOption={this.handleAddOption} //giving access and we will call it in child 
            />
            <RemoveAll options={this.state.options} propRemoveAll ={this.handleRemoveAll} />
            <Options 
             options={this.state.options}
             handleDeleteOption={this.handleDeleteOption}
             />
            <Action
             NoOptions={this.state.options.length == 0}
             pick={this.handlePick}
            
            
             />
        </div>
        )
    };

    componentDidMount(){
        console.log("Hello component");
    };

    componentDidUpdate(){
        console.log("component updated");
    };

    componentWillUnmount(){
        console.log("goodbye component");
    };
};
IndecisionApp.defaultProps = {
    defaultOptions: []
}

 

ReactDOM.render( <IndecisionApp defaultOptions={["React","Angular","Vue"]}  /> , document.getElementById('app'));

