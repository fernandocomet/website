import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
    render(){
        const menuLinks = this.props.menu.map(item => (
            <div className="navbar-item" key={item.name}>
                <NavLink exact to={`/${item.name}`}>
                    <img src={item.src} alt={item.name} width='24px'/>
                </NavLink>
            </div>
        ))

        return(
            <div className="navbar">
                {/* <h1>This is menu</h1> */}
                    {menuLinks}
            </div>
        )
    }
}

export default Navbar;
