import React from 'react';
import gql from 'graphql-tag';

import Form from '../common/Form';

const SignIn = () => {
    return (
        <div />
    );
}

const mutation = gql`
    mutation signin($email: String, $password: String) {
        login(email: $email, password: $password) {
            id
            email
        }
    }
`;

export default Form('Sign In', mutation)(SignIn);
