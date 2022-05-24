import '../styles/components/pages/Darksouls3.css'

const Darksouls3 = (props) => {
    return (
        <div className="darksoul">
            <section className="sectionds">


                <div className="card">
                    <img src="img/DS3/ds3.jpg" alt="" />
                    <h3>Plataformas</h3>
                    <h3>PS4 XBOXONE PC</h3>

                </div>

                <div className="floatr3">
                    <h1>Historia</h1>
                    <h3>Dark Souls III (ダークソウルIII, Dāku Souru Surī) es un videojuego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment para PlayStation 4, Xbox One y Microsoft Windows. Es la tercera entrega en la saga Souls,1​ Dark Souls III fue lanzado en Japón en marzo de 2016, y de manera mundial en abril del mismo año.</h3>
                    <h3>Dark Souls III fue un éxito tanto de crítica como de ventas, con la crítica nombrando a este como un digno y adecuado final para la saga. Es el juego de Namco Bandai que más rápido se ha vendido en su historia, vendiendo más de tres millones de copias en todo el mundo en menos de dos meses tras su lanzamiento.</h3>
                    <h3>Dark Souls 3 es el final de la saga y presenta un mundo, el Reino de Lothric, al borde del Apocalipsis por culpa de "la maldición de los no muertos", y la razón por la que el mundo aún no se ha sumido en la oscuridad totalmente es el sacrificio que muchos héroes e incluso dioses hicieron al reavivar la llama original, la cual se encarga de mantener la "Era del fuego", dejando que esta consumiera sus respectivas almas y cuerpos.</h3>
                </div>

            </section>
            <section className="sectiondlc1">
                <div className="card2">
                    <img src="img/DS3/ashesofariandel.jpg" alt="" />

                </div>
                <div className="floatl3">
                    <h1>Ashes of Ariandel</h1>
                    <h3>Ashes of Ariandel (Cenizas de Ariandel) es contenido descargable para el juego Dark Souls III. Salió a la venta el 21 de octubre de 2016 para Xbox One y el 24 de octubre del mismo año para PlayStation 4 y PC.</h3>
                    <h3>Es la primera de dos expansiones, la otra es The Ringed City.</h3>
                    <iframe className="ashesofariandel" width="856" height="480" src="https://www.youtube.com/embed/gpqRlyTtWGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>
                </div>
            </section>
            <section className="sectiondlc32">

                <div className="card3">
                    <img src="img/DS3/ringedcity.jpg" alt="" />

                </div>

                <div className="floatr4">
                    <h1>Ashes of Ariandel</h1>
                    <h3>The Ringed City (La Ciudad Anillada) es el segundo y último contenido descargable para el juego Dark Souls III. Salió a la venta el 28 de marzo de 2017 para PlayStation 4, Xbox One y PC</h3>
                   
                    <iframe className="ringedcity" width="856" height="480" src="https://www.youtube.com/embed/5VhnJ-7PbTE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true"></iframe>
                </div>

            </section>
        </div>

    );
}
export default Darksouls3