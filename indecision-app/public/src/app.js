console.log('App.js is running!'); 
 
var template = ( 
<div>                                                        {/* adjacent elements without root element(div) will give error*/}  
    <h1>Indecision App!</h1>
    <p>Welcome</p>
    <ul>
        <li>First Item</li>
        <li>Second Item</li>
    </ul>
</div>);

var user = {
    name: 'Abdallah',
    age: '21',
    location: 'X'

};
var templateTwo = (
    <div>
        <h1>Name: {user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location} </p>
        </div>);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo,appRoot);

 