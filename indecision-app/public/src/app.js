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
                <p>{this.props.length}</p>
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
    
    handleSubmit(e){
        e.preventDefault();
        if(e.target.elements.text.value)
        alert(e.target.elements.text.value.trim());

        e.target.elements.text.value = '';
    }
    render() {
        return (
            <div>
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






class IndecisionApp extends React.Component {

    constructor(props){
        super(props);
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ["Option A","Option B","Option C"]
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
    }

    render(){
        return (
        <div>
            <Header title="Indecision App" subtitle="let the computer decide what you learn today" />
            <Add />
            <RemoveAll options={this.state.options} propRemoveAll ={this.handleRemoveAll} />
            <Options options={this.state.options} length={this.state.options.length} />
            <Action
             NoOptions={this.state.options.length == 0}
             pick={this.handlePick}
            
            
             />
        </div>
        )
    };
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

