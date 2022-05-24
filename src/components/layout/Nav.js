import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
        <nav>
            <div className="barra">
                <ul>
                    <li><NavLink activeClassName="activo"exact to="/">Inicio</NavLink></li>
                    <li><NavLink activeClassName="activo"exact to="/Noticias">Noticias</NavLink></li>
                    
                </ul>
            </div>


        </nav>
    );

}
export default Nav;