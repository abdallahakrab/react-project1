import React from 'react';
import Option from './Option';



const Options = (props) =>{
    return (
        <div>

         {props.options.length === 0 && <p>Add options to get started!</p>}
         {props.options.map(option =>
            <Option 
             key={option}
             optionText = {option} 
             handleDeleteOption={props.handleDeleteOption}
             /> )}
        </div>
    )
};

export default Options;