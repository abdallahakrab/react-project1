class Header extends React.Component {
   
    render(){ 
        return (
            <div>
            <h1>{this.props.title}</h1>  
            <p>{this.props.subtitle}</p>
            </div>
        )

    }
}

class Action extends React.Component { 
    render() {
        return (
            <div>
                <button 
                disabled={this.props.NoOptions}
                onClick={this.props.pick}>
                What should I learn today?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options will be here</p>
                { this.props.options.map((option)=> <Option key={option} optionText = {option} />  ) }
            </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return(
            <div>
             {this.props.optionText}
            
            </div>
        )
    }
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

class RemoveAll extends React.Component {

   
    
    render(){
        return <button onClick={this.props.propRemoveAll}>Remove All</button> ; //Mehtod 1 to bind this to event handlers 
    }
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
        this.setState((prevState)=>{
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
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

