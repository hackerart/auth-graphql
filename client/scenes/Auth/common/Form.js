import React from 'react';
import { hashHistory } from 'react-router';
import { graphql } from 'react-apollo';

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
                        <Component {...this.props} />
                        <h3>{name}</h3>
                        <form onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                            <input
                                type="text"
                                name="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                            <button type="submit">log in</button>
                        </form>
                    </div>
                );
            }
        }
        return graphql(mutation)(Form);
    }
}
