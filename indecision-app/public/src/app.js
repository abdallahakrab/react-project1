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
var appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);

 