import React from 'react';
import Option from './Option';
import RemoveAll from './RemoveAll';



const Options = (props) => (
        <div>
         <div className="widget-header">
          <h3 className="widget-header__title">Your options are here</h3>
           <RemoveAll
            options={props.options} 
            propRemoveAll ={props.handleRemoveAll} 
           />
          </div>
          {props.options.length === 0 && <p>Add options to get started!</p>}
          {props.options.map(option =>
          <Option 
           key={option}
           optionText = {option} 
           handleDeleteOption={props.handleDeleteOption}
          /> )}
        </div>
    
);

export default Options;