
class Header extends React.Component {
   
    render(){ 
        return (
            <div>
            <h1>Indecision</h1>
            <p>Let the computer help you decide</p>
            </div>
        )

    }
}

class Action extends React.Component { 
    render() {
        return (
            <div>
                <button>What should I learn today?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options will be here</p>
            </div>
        )
    }
}

class Add extends React.Component {
    render() {
        return (
            <div>
                <button>Add Option</button>
            </div>
        )
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <Add />
    </div>

)

ReactDOM.render(jsx, document.getElementById('app'));

