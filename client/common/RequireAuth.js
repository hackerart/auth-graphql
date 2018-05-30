import React from 'react';
import { graphql } from 'react-apollo';
import fetchUser from '../queries/fetchUser';
import { hashHistory } from 'react-router';

export default (Component) => {
    class RequireAuth extends React.Component {
        render() {
            const { loading, user } = this.props.data;
            if (loading) { return <div>loading...</div>; }
            if (!user) { hashHistory.push('/signin');  }
            return (
                <Component {...this.props} />
            );
        }
    }
    return graphql(fetchUser)(RequireAuth);
};
