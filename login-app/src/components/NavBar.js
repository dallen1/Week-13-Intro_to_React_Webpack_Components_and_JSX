import React from 'react';
import CompanyLogo from './CompanyLogo';
import MenuLink from './MenuLink'

export default class NavBar extends React.Component {

    render () {
        return (     
            <div className='navBar'>
                <div className='leftNav'><a href="/"><CompanyLogo /></a></div>
                <div className='rightNav'> 
                    <MenuLink link="/" display="home"/> 
                    <MenuLink link="/about" display="about"/> 
                    <MenuLink link="/events" display="events"/> 
                </div>
            </div>
            );
    };
};