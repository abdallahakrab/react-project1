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
const templateTwo = (
    <div>
        <h1>Name: {user.name}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.Location)}
        
        </div>);

const appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);

 