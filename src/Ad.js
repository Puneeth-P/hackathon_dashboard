import React, { Component } from 'react';
import Google_Advert from './src_ad/ad_App';

class Ad extends Component {
    render() {
        return (
            <div>
                Welcome Ad: {this.props.match.params.id}
                <Google_Advert />
            </div>
        );
    }
}

export default Ad;
