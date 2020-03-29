import React, { PureComponent } from 'react';
import Login from '../login';
import Profile from '../profile';
import Game from '../game';

interface RouterState {
    currentPath : string
}

export default class Router extends PureComponent<{}, RouterState> {
    constructor (props: any) {
        super(props);

        this.state = {
            currentPath: '/'
        };
    }

    componentDidMount () {
        window.addEventListener('popstate', this.handleUrlChange);
    }

    handleUrlChange = () => {
        this.setState({
            currentPath: document.location.hash
        });
    }

    goTo = (url : string) => window.location.hash = `#/${url}`

    render () {
        let parts : Array<string> = this.state.currentPath.split('/');
        parts.shift(); // Remove '#'

        // TODO: Check user authentication
        switch (parts[0]) {
            case 'profile':
                return <Profile user={{ id: '1', firstName: 'Bruce', lastName: 'Wayne' }} />;
            case 'game':
                return <Game user={{ id: '1', firstName: 'Bruce', lastName: 'Wayne' }}
                            gameDetails={{ target : { id: '2', firstName: 'Arthur', lastName: 'Fleck' }}} />;
            default:
                return <Login onLogin={this.handleLogin} />;
        }
    }

    handleLogin = () => this.goTo('game')
}
