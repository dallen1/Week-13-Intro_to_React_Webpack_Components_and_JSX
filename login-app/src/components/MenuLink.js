import React from 'react';

export default class CompanyLogo extends React.Component {

    render () {
        return (     
            <a href={this.props.link}>{this.props.display}</a>
            );
    };
};