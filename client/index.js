import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './scenes/App';
import Home from './scenes/Home/Home';
import SignIn from './scenes/Auth/SignIn/SignIn';
import SignUp from './scenes/Auth/SignUp/SignUp';
import Dashboard from './scenes/Dashboard/Dashboard';

const client = new ApolloClient({
    dataIdFromObject: a => a.id,
    networkInterface:
});

const Root = () => {
    return (
        <ApolloProvider client={client}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home} />
                    <Route path="signin" component={SignIn} />
                    <Route path="signup" component={SignUp} />
                    <Route path="dashboard" component={Dashboard}/>
                </Route>
            </Router>
        </ApolloProvider>
    );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
