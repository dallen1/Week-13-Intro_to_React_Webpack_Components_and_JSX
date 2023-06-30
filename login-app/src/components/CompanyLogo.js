import React from 'react';
import logo from '../assets/promineo-tech-logo.png';

export default class CompanyLogo extends React.Component {
    render () {
        return (     
            <img src={logo} alt='Company Logo'></img>
            );
    };
};