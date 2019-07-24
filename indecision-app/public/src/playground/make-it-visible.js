console.log("Hello");
const onShowDetails = () => {
    show=!show;
    renderToggle();
   
} 



let show = false;
const template =(
    <div>
    <p>Visiblity Toggle</p>
    <button onClick={onShowDetails}>Show Details</button>
    </div>)
const appRoot = document.getElementById("app");

const renderToggle = () =>{
    console.log(show);
    const template =(
<div>
    <p>Visiblity Toggle</p>
    <button onClick={onShowDetails}>{show?"Hide details":"Show Details"}</button>
    {show && <p>Show all details</p>  }
</div>)

ReactDOM.render(template,appRoot);

};


renderToggle();