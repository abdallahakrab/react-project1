
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

//trying built-in children prop

const Comp = (props) => {
return (
    <div>
     <p>Header</p>
     {props.children}
     <p>Footer</p>

    
    </div>
)
};


ReactDOM.render( <Comp>
    <h1>test</h1>
    </Comp> 
    , document.getElementById('app'));

 

