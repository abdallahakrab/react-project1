console.log('App.js is running!'); 

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
 

// const user = {
//     name: 'Abdallah',
//     age: '21',
//     Location: 'X'
// };
// function getLocation(location){
//     if(location)
//     return <p>Location: {location} </p> ;
    
// };
const appRoot = document.getElementById('app');
const renderSubmitForm = () =>{
    const template = ( 
        <div>                                                        
            <h1>{app.title} App!</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p> Here are your options </p> : <p>no options</p>}
            <ul>
                <li>First Item</li>
                <li>Second Item</li>
            </ul>
            <button onClick={clickRemoveAll}>Remove all</button>
            <p>{app.options.length}</p>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Submit</button> 
            </form>
        </div>);
    ReactDOM.render(template,appRoot);

}
renderSubmitForm();




 