

const Header = (props) => {
    return (
        <div>
         <h1>{props.title}</h1>
         <p>{props.subtitle}</p>
        </div>
    )
}

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
         {props.options.map((option)=> <Option key={option} optionText = {option} /> )}
        </div>
    )
}



const Option = (props) => {
    return <div>{props.optionText}</div>
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
        this.setState(()=>{
            return { error }  // == to {error: error} , es6 shorthand
          }  )
        
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
        this.state = {
            options: []
        };
    };  

    handleRemoveAll() {
        this.setState(()=>{
            return {
                options: []
            }
        })
    };

    handlePick(){
        let x = Math.floor(Math.random() * this.state.options.length);
        console.log(this.state.options[x]);
    };

    handleAddOption(option){

        if(!option){
            return "Enter a valid input";
        }
        else if(this.state.options.indexOf(option) > -1)
            return "This item already exists";

        this.setState((prevState)=>{           // == to else clause ! 
            return {
                options: prevState.options.concat(option)
            }
        })

    }

    render(){
        return (
        <div>
            <Header title="Indecision App" subtitle="let the computer decide what you learn today" />
            <Add 
             handleAddOption={this.handleAddOption} //giving access and we will call it in child 
            />
            <RemoveAll options={this.state.options} propRemoveAll ={this.handleRemoveAll} />
            <Options options={this.state.options}  />
            <Action
             NoOptions={this.state.options.length == 0}
             pick={this.handlePick}
            
            
             />
        </div>
        )
    };
};

 const User = (props) => {
     return (
         <div>
          <h1>Name: {props.name}</h1>
          <p>age: {props.age} </p>
         </div>
     )
 }



ReactDOM.render( <IndecisionApp  /> , document.getElementById('app'));

