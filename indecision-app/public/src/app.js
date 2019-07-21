console.log('App.js is running!'); 
 //JSX expression challenge:

 var app = {
     title: "Indecision",
     subtitle: "This is some info"
 };
var template = ( 
<div>                                                        
    <h1>{app.title} App!</h1>
    <p>{app.subtitle}</p>
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
ReactDOM.render(template,appRoot);

 