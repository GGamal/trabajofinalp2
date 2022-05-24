import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/components/layout/Header.css'

const Header = (props) =>{
    return(
        <header>
        <div className="contenedor">
           <img className="nombre" src="img/dslogomejorado.jpg" alt=""/>
           <img  src="img/soulsbonfire.jpg" width="100px" height="110px" alt=""/>
           
           <img className="usuario" src="img/fotousuario.jpg" alt=""/>
           
        </div>


        </header>
    );
}
export default Header;