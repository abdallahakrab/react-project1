import React from 'react';

export default class Add extends React.Component {
    state = {
        error: undefined
    };
    
    
    handleSubmit = (e) => {
        e.preventDefault();
        const option = e.target.elements.text.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>({error})); 
             
         
        
        e.target.elements.text.value = '';
    };
    render() {
        return (
            <div>
            {this.state.error && <p className="add-option-error">{this.state.error}</p>}
            <form
             onSubmit={this.handleSubmit}
             className= "add-option"
             >
                <input className="add-option__input" name="text" type="text"></input>
                <button className="button" >Add Option</button>
            </form> 
            </div>
            
        );
    }
};