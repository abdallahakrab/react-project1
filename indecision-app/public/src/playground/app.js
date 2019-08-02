const app = {
    title: "Indecision",
    subtitle: "This is some info",
    options: []
};
const onFormSubmit = (e) =>{
    e.preventDefault();

    const option = e.target.elements.option.value ;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderSubmitForm();
    }
};

const clickRemoveAll = ()=>{
    app.options = [];
    renderSubmitForm();
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNumber]);
}



const appRoot = document.getElementById('app');


const renderSubmitForm = () =>{
   const template = ( 
       <div>                                                        
           <h1>{app.title} App!</h1>
           {app.subtitle && <p>{app.subtitle}</p>}
           {app.options.length > 0 ? <p> Here are your options </p> : <p>no options</p>}
           <ol>
               {app.options.map((option)=>{
                   return <li key={option}>{option}</li>;
               })}
           </ol>
           <button disabled={app.options.length ==0} onClick={onMakeDecision}>
           What should I learn today
           </button>
           <button onClick={clickRemoveAll}>
           Remove all
           </button>
           <p>{app.options.length}</p>
           <form onSubmit={onFormSubmit}>
           <input type="text" name="option"/>
           <button>Submit</button> 
           </form>
       </div>);
   ReactDOM.render(template,appRoot);

}
renderSubmitForm();




