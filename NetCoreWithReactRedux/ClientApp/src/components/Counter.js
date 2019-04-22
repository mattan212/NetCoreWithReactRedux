import React, { Component } from 'react';
import { Row, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Counter extends Component {
    displayName = Counter.name
    constructor() {
        super();
        this.state = {
            timeoutMs: 1000
        }
        this.updateTimeoutMs = this.updateTimeoutMs.bind(this);
    }
    updateTimeoutMs(e) {
        let value = e.target.value;
        this.setState({
            timeoutMs: value
        });
    }
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>This is a simple example of a React component.</p>
                <p>This demonstrates a sync and an async counter increments using redux.</p>
                <hr />
                <h4>Current count: <strong>{this.props.currentCount}</strong></h4>
                <InputGroup>
                    <Button onClick={this.props.incrementCounter}>Increment</Button>
                </InputGroup>
                <br />
                <InputGroup>
                    <Input placeholder="1000ms" min={1000} max={10000} type="number" step="100" value={this.state.value}
                        onChange={this.updateTimeoutMs}
                    />                    
                    <Button onClick={() => this.props.incrementCounterAsync(this.state.timeoutMs)}>Increment Async</Button>
                </InputGroup>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentCount: state.counter
    }
}

const mapDispatchToProps = {
    incrementCounter: actions.incrementCounter,
    incrementCounterAsync: actions.incrementCounterAsync
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
