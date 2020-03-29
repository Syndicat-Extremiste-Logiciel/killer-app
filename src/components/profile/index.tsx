import React, { PureComponent } from 'react';
import User from '../../models/user';

interface ProfileProps {
    user: User;
}

export default class Profile extends PureComponent<ProfileProps, {}> {
    render() {
        return (
            <div>
                <h1>{`${this.props.user.firstName} ${this.props.user.lastName}`}</h1>
                <p>Hi, welcome to your profile comrade.</p>
            </div>
        );
    }
}
