import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import Add from './Add';
import RemoveAll from './RemoveAll';
import ModalComponent from './ModalComponent';
import { throws } from 'assert';


export default class IndecisionApp extends  React.Component {

    
    state = {
        options: [],
        optionSelected: undefined
    };

    handleRemoveAll = () => {
        this.setState(() => ({options: []}));
    };

    handlePick = () => {
        let randomIndex = Math.floor(Math.random() * this.state.options.length);
        this.setState(()=>({optionSelected: (this.state.options[randomIndex])}));
        return (this.state.options[randomIndex]);
    };

    handleAddOption = (option) => {

        if(!option){
            return "Enter a valid input";
        }
        else if(this.state.options.indexOf(option) > -1)
            return "This item already exists";

        this.setState((prevState)=> ({options: prevState.options.concat(option)}));         // == to else clause ! 
            

    };

    handleDeleteOption = (option) => {

        this.setState( prevState => ({options: prevState.options.filter(element => element != option)})) ;
        
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({optionSelected: undefined}));
    };

    render(){
        return (
       
        <div>
        <Header  subtitle="let the computer decide what you learn today" />
            <div className="container">
            
             <Add 
             handleAddOption={this.handleAddOption} //giving access and we will call it in child 
             />
              <RemoveAll options={this.state.options} propRemoveAll ={this.handleRemoveAll} />
             <Options 
             options={this
                .state.options}
             handleDeleteOption={this.handleDeleteOption}
             />
            <Action
             NoOptions={this.state.options.length == 0}
             pick={this.handlePick}
             />
            </div>
             <ModalComponent
              optionSelected={this.state.optionSelected}
              closeModal={this.handleClearSelectedOption}
             />

        </div>
        )
    };

    componentDidMount(){

        try {
            const optionsStr = localStorage.getItem("options");
        const optionsArr = JSON.parse(optionsStr);

        if(optionsArr){
        this.setState( ()=> ({options:optionsArr}));
        }
        } catch (e) {
            // DO
        }
        
    };

    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options",json);

        }
    };

    componentWillUnmount(){
        console.log("goodbye component");
    };
};


// IndecisionApp.defaultProps = {
//     defaultOptions: []
// }



