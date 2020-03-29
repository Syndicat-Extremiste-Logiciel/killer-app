import React, { PureComponent, ChangeEvent, FormEvent } from 'react';

interface LoginProps {
    onLogin: Function;
    defaultLogin?: string;
    defaultPassword?: string;
}

interface LoginState {
    login: string;
    password: string;
}

export default class Login extends PureComponent<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);

        this.state = {
            login: props.defaultLogin || 'test',
            password: props.defaultPassword || ''
        };
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <label>
                    Login :
                    <input
                        type="text"
                        onChange={this.handleLoginChange}
                        value={this.state.login}
                    />
                </label>
                <label>
                    Password :
                    <input
                        type="password"
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        );
    }

    handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        this.setState({
            login: value
        });
    };

    handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        this.setState({
            password: value
        });
    };

    handleLogin = (event: FormEvent) => {
        event.preventDefault();

        // TODO: Redux authentication
        const { login, password } = this.state;

        if (login === 'test' && password === 'penis') {
            this.props.onLogin();
        }
    };
}
