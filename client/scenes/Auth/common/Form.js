import React from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';

import fetchUser from '../../../queries/fetchUser';

export default (name, mutation) => {
    return function (Component) {
        class Form extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    email: '',
                    password: ''
                };
                this.onChange = this.onChange.bind(this);
                this.onSubmit = this.onSubmit.bind(this);
            }
            componentWillUpdate(nextProps) {
                if (nextProps.data && nextProps.data.user) {
                    hashHistory.push('/dashboard');
                }
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
                    variables: this.state,
                    refetchQueries: [{ query: fetchUser }]
                });
                e.target.reset();
            }

            render() {
                const { error } = this.props;
                return (
                    <div className="container">
                        <Component {...this.props} />
                        <div className="row center">
                            <h3>{name}</h3>
                            <form
                                className="offset-s2 col s8 m6 offset-m3"
                                onSubmit={this.onSubmit}
                            >
                                {error && <div>{error.message}</div>}
                                <div className="input-field">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="input-field">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <button type="submit" className="btn blue">
                                    login
                                </button>
                            </form>
                        </div>
                    </div>
                );
            }
        }
        return graphql(fetchUser)(graphql(mutation)(Form));
    }
}
