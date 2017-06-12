import React, { Component } from 'react';

class Ad extends Component {
    render() {
        return (
            <div>
                Welcome Ad: {this.props.match.params.id}

            </div>
        );
    }
}

export default Ad;
