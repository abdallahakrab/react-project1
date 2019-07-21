console.log('App.js is running!'); 
 
var template = <div>       {/* adjacent elements without root element(div) will give error*/}  
<h1>Indecision App!</h1>
<p>Welcome</p>
</div>;
var appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);

 