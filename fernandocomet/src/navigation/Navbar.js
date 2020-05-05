import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component{
    render(){
        const menuLinks = this.props.menu.map(item => (
            <li key={item.name}>
                <NavLink exact to={`/${item.name}`}>
                {/* <NavLink exact to={`/menu/${item.name}`}> */}
                    <img src={item.src} alt={item.name} width='24px'/>
                    {/* {item.name} */}
                </NavLink>
            </li>
        ))

        return(
            <div>
                <h1>This is menu</h1>
                <ul>
                    {menuLinks}
                </ul>
            </div>
        )
    }
}

export default Navbar;
