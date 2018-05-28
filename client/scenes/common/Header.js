import React from 'react';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Header = ({ data: { user, loading }}) => {
    if (loading) { return <div>loading...</div>;}
    return (
        <div>
            {
                !user
                ? [
                    <Link key={1} to="/signup">Sign Up</Link>,
                    <Link key={2} to="/signin">Sign In</Link>
                ] : (
                    <Link to="/logout">Log out</Link>
                )
            }


            {/*<Link to="logout">Log out</Link>*/}
        </div>
    );
};

const query = gql`
    {
        user {
            id
            email
        }
    }
`;

export default graphql(query)(Header);
