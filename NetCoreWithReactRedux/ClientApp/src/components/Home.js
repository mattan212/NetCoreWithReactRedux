import React, { Component } from 'react';
import InputBox from './InputBox';
import { Container, Col, Jumbotron } from 'reactstrap';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <Container>
                <Col>
                    <h1>Hello, {this.props.name}!</h1>
                    <p>This component demonstrates triggering a redux action with input from the text box.</p>
                    <InputBox placeholder="Enter your name" />
                </Col>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.name
    }
}

export default connect(
    mapStateToProps,
    null
)(Home);
