import React from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.getAttribute('name')]: e.target.value
        });
    }
    onSubmit(e) {
        const { email, password } = this.state;
        e.preventDefault();
        this.props.mutate({
            variables: { email, password }
        }).then(() => hashHistory.push("/"));
        e.target.reset();
    }
    render() {
        return (
            <div>
                <h3>Sign In</h3>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="password"
                    />
                    <button type="submit">log in</button>
                </form>
            </div>
        );
    }
}

const mutation = gql`
    mutation signin($email: String, $password: String) {
        login(email: $email, password: $password) {
            email
        }
    }
`;

export default graphql(mutation)(SignIn);
