import React from 'react';
import { Link } from 'react-router';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import fetchUser from '../queries/fetchUser';

const Header = ({ mutate, data: { user, loading, refetch }}) => {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper container">
                    <Link to="/" className="brand-logo left">Home</Link>
                    <ul className="right">
                        {loading
                            ? (
                                <div />
                            ) : (
                                !user || !user.email
                                    ? [
                                        <li key={1}>
                                            <Link to="/signup">
                                                Sign Up
                                            </Link>
                                        </li>,
                                        <li key={2}>
                                            <Link to="/signin">
                                                Login
                                            </Link>
                                        </li>
                                    ] : (
                                        <li onClick={() =>
                                            mutate()
                                                .then(() => refetch())
                                        }>
                                            <a>Log out</a>
                                        </li>
                                    )
                            )
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

const mutation = gql`
    mutation{
        logout {
            id
            email
        }
    }
`;

export default graphql(mutation)(
    graphql(fetchUser)(Header)
);
