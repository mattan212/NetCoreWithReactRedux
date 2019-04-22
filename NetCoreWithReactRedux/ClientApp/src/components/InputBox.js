import React, { Component } from 'react';
import { Row, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import * as actions from "../actions";
import { connect } from 'react-redux';

class InputBox extends Component {
    static displayName = InputBox.name;
    constructor() {
        super();
        this.state = {
            text: ""
        }
    }
    handleSubmit() {
        this.props.sayHello(this.state.text);
        this.setState({
            text: ""
        });
    }
    handleInput(e) {
        this.setState({
            text: e.target.value
        });
    }
    checkIfSubmitted(e) {
        if (e.keyCode === 13) {
            this.handleSubmit();
        }
    }
    render() {
        return (
            <Row>
                <InputGroup>
                    <Input placeholder={this.props.placeholder}
                        onChange={e => this.handleInput(e)}
                        onKeyDown={e => this.checkIfSubmitted(e)}
                        value={this.state.text}
                    />
                    <InputGroupAddon addonType="append">
                        <Button color="secondary" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </Row>
        );
    }
}

const mapDispatchToProps = {
    sayHello: actions.sayHello
}

export default connect(
    null,
    mapDispatchToProps
)(InputBox);

