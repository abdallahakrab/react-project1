import React from "react";

const Action = (props) => (

        <div>
         <button
         className="big-button"
         disabled={props.NoOptions}
         onClick={props.pick}>
         What should I learn today?
         </button>
        </div>
    );


export default Action;