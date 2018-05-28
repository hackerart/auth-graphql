import React from 'react';
import gql from 'graphql-tag';

import Form from '../common/Form';

const SignUp = () => {
    return (
        <div />
    );
}

const mutation = gql`
    mutation signup($email: String, $password: String) {
        signup(email: $email, password: $password) {
            email
        }
    }
`;

export default Form('Sign Up', mutation)(SignUp);
