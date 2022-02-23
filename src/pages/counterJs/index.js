import React from 'react';

class CounterJs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    componentDidMount() {
        this.setState({ count: 1 });
    };

    handleAdd = (e) => {
        e.preventDefault();
        this.setState({ count: this.state.count + 1 });
    };

    handleRemove = (e) => {
        e.preventDefault();
        if (this.state.count === 0) {
            alert('Do not accept negative numbers');
            return;
        }
        this.setState({ count: this.state.count - 1 });
    };

    render () {
        return (
            <React.Fragment>
                <h1>Counter JS</h1>
                <div>
                    <h2>Counter: {this.state.count}</h2>
                    <button onClick={this.handleAdd}>Add</button>
                    <button onClick={this.handleRemove}>Remove</button>
                </div>
            </React.Fragment>
        )
    }
}

export default CounterJs;