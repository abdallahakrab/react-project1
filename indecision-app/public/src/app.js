//Variables

const options = ["thing one", "thing throw", "thing three"];

const dummy = ["d1","d2","d3"];


//End Variables 


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
                <button>What should I learn today?</button>
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
    
    handleRemove(){
        alert("Options Removed");
    }
    render(){
        return <button onClick={this.handleRemove}>Remove All</button> ;
    }
}






class IndecisionApp extends React.Component {

    render(){
        return (
        <div>
            <Header title="Indecision App" subtitle="let the computer decide what you learn today" />
            <Add />
            <RemoveAll />
            <Options options={options} length={options.length} />
            <Action />
        </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

