import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/pages/HomePage.css'

const HomePage = (props) => {

    return ( 
        <div className="contenidods">
             
            <NavLink exact to="/Contacto">
                    <button class="btn btn-secondary contactobot">Contacto</button>
            </NavLink>
            
            <section className="ds1">
                <NavLink exact to="/Darksouls">
                    <div className="divds1">
                        <h1>Dark Souls tiene lugar en el reino ficticio llamado Lordran.</h1>
                        <h1>Los jugadores toman el papel de un personaje humano maldito que ha sido elegido para realizar un peregrinaje para descubrir
                            el destino de los no muertos</h1>
                        <iframe width="640" height="480" src="https://www.youtube.com/embed/kKLRfkM2r3k" title="YouTube video player"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>

                    </div>
                </NavLink>
            </section>

            <section className="ds2">
                <NavLink exact to="/Darksouls2">
                    <div className="divds2">
                        <h1>La historia de Dark Souls II no conecta directamente con la de Dark Souls, a pesar de desarrollarse en el mismo mundo.</h1>
                        <h1>El juego tiene lugar en Drangleic, una tierra anteriormente próspera bajo el mando del rey Vendrick, la cual ha caído en la ruina a través de los años
                            debido a la guerra entre humanos y gigantes, la desaparición repentina del rey y una nueva plaga abismal.
                            Al igual que otros, el protagonista ha llegado al reino desmoronado en busca de una cura para su aflicción, la maldición del no muerto</h1>
                        <iframe width="640" height="480" src="https://www.youtube.com/embed/hTH1TKOYs_I" title="YouTube video player"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>

                    </div>
                </NavLink>
            </section>

            <section className="ds3">
                <NavLink exact to="/Darksouls3">
                    <div className="divds3">
                        <h1>Dark Souls III esta situado en el reino de Lothric.</h1>
                        <h1>El jugador tiene la tarea de sobrevivir a un apocalipsis que se aproxima, provocado por el conflicto entre la Era del Fuego y aquellos marcados con la Señal oscura, el clásico conflicto dado en las anteriores entregas de la saga.
                            Para sobrevivir en este caso, el personaje del jugador deberá enfrentarse a los Señores de la Ceniza, héroes del pasado que enlazaron el Fuego</h1>
                        <iframe width="640" height="480" src="https://www.youtube.com/embed/9Bp8z9qyCCE" title="YouTube video player"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>

                    </div>

                </NavLink>
            </section>

        </div>

    );

}

export default HomePage