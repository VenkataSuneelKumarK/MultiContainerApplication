import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState({ a: 0, b: 10 });
    const [fruit, setFruit] = useState("banana");
    //const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    useEffect(
        () => {
            // Update the document title using the browser API
            document.title = `You clicked ${count} times`;
            console.log("Use effect::");
        },
        [count]
    );
    return (
        <div>
            <Example />
      Welcome to other page
            <div>Count {count}</div>
            <div>{obj.a}</div>
            <div>{obj.b}</div>
            <div>{fruit}</div>
            <button onClick={() => setObj({ ...obj, a: obj.a + 1 })}>Click me</button>
            <button
                onClick={() => {
                    if (fruit === "banana") {
                        setFruit("Apple");
                    } else {
                        setFruit("banana");
                    }
                }}
            >
                Fruit: Click me
      </button>
            <button onClick={() => setCount(count + 1)}>Increase count</button>
            <Link to="/">Go back Home</Link>
        </div>
    );
};

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate");
        document.title = `You clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
        </button>
            </div>
        );
    }
}

export default OtherPage;
