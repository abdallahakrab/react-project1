console.log('App.js is running!'); 


 const app = {
     title: "Indecision",
     subtitle: "This is some info",
     options: []
 };
const template = ( 
<div>                                                        
    <h1>{app.title} App!</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? <p> Here are your options </p> : <p>no options</p>}
    <ul>
        <li>First Item</li>
        <li>Second Item</li>
    </ul>
</div>);

const user = {
    name: 'Abdallah',
    age: '21',
    Location: 'X'
    

};
function getLocation(location){
    if(location)
    return <p>Location: {location} </p> ;
    
}
/////////////////////
let count = 0;
const addOne= () => {count++;
renderCounterApp();};
const subOne= () => {count--;
renderCounterApp();};
const reset = () => {count=0;
renderCounterApp();};


const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button> 
        <button onClick={subOne}>-1</button>
        <button onClick={reset}>Reset</button>
    
            
            
            </div>);
ReactDOM.render(templateTwo,appRoot);

};


renderCounterApp();

 