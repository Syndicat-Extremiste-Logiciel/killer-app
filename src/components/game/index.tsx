import React, { PureComponent } from 'react';
import User from '../../models/user';

interface GameProps {
    user: User;
    gameDetails: any; // TODO: Define this
}

export default class Game extends PureComponent<GameProps, {}> {
    render() {
        return (
            <div>
                <h1>
                    <a href="/#/profile">{`${this.props.user.firstName} ${this.props.user.lastName}`}</a>
                </h1>
                <h3>
                    Your target is{' '}
                    <a href={`/#/profile/${this.props.gameDetails.target.id}`}>
                        {this.props.gameDetails.target.firstName}
                    </a>
                </h3>
            </div>
        );
    }
}
