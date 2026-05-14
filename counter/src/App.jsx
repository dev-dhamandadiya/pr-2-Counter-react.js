import { Component } from "react";
import Counter from "./components/Counter.jsx";
import "./App.css";

class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            count : 0
        }

        this.handleCounter = this.handleCounter.bind(this)
    }

    handleCounter(){
        this.setState({
            count : this.state.count + 1
        })
    }

    render(){
        return(
            <div className="container">

                <h2>Counter App</h2>

                <div className="count">
                    {this.state.count}
                </div>

                <button
                    type="button"
                    className="btn"
                    onClick={this.handleCounter}
                >
                    Count ++
                </button>

                <div className="child-box">
                    <Counter name="Diya" />
                </div>

            </div>
        )
    }
};

export default App;