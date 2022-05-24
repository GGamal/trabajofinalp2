import './../styles/components/pages/Darksouls2.css'
const Darksouls2 = (props) => {
return (
<div className="darksoul2">
    <section className="sectionds2">


        <div className="cardds2">
            <img src="img/DS2/ds2.jpg" alt="" />
            <h3>Plataformas</h3>
            <h3>PS3 XBOX360 PC</h3>

        </div>

        <div className="floatr2">
            <h1>Historia</h1>
            <h3>Dark Souls II (ダークソウルツー Dāku Souru Tsū) es un juego desarrollado por FromSoftware que sigue la estela de
                Dark Souls. Fue anunciado el 7 de diciembre de 2012. El juego fue editado para PlayStation 3, Xbox 360 y
                PC por Bandai Namco Entertainment. Dark Souls II fue lanzado en PlayStation 3 y Xbox 360 el 11 de marzo
                de 2014 en Norte América; fue lanzado el 13 de marzo en Japón y Australia; y el 14 de marzo en Europa.
                La versión de PC fue lanzada el 24 de abril de 2014.</h3>
            <h3>El 7 de abril de 2015 se estrenó Dark Souls II: Scholar of the First Sin, una versión especial del
                mismo. El juego posee una secuela, Dark Souls III.</h3>
            <h3>El juego tiene lugar en Drangleic, una tierra anteriormente próspera bajo el mando del rey Vendrick, la
                cual ha caído en la ruina a través de los años debido a la guerra entre humanos y gigantes, la
                desaparición repentina del rey y una nueva plaga abismal. Al igual que otros, el protagonista ha llegado
                al reino desmoronado en busca de una cura para su aflicción, la maldición del no muerto.</h3>
        </div>

    </section>
    <section className="sectiondlc2">
        <div className="card2ds2">
            <img src="img/DS2/firstsin.jpg" alt="" />
            <h3>Plataformas</h3>
            <h3>PS3 XBOX360 PC PS4</h3>

        </div>
        <div className="floatl2">
            <h1>Scholar of the First Sin</h1>
            <h3>En 2014, FromSoftware anunció la edición Scholar of the First Sin de Dark Souls II, la cual es una
                remasterización del juego para PlayStation 4, Xbox One y PCs compatibles con DirectX 11. También fue
                lanzado para PlayStation 3, Xbox 360 y PCs compatibles con DirectX 9, pero sin las características de
                las consolas de la generación actual. En ambas versiones se incluye la trilogía de Las Coronas Perdidas.
                Además de esto, algunos de los nuevos contenidos (el NPC Aldia, erudito del primer pecado y algunas
                nuevas descripciones de objetos) fueron lanzados como una actualización gratuita para aquellos que ya
                poseían el juego.</h3>
            <iframe className="Scholar" width="856" height="480" src="https://www.youtube.com/embed/ajKZw1DQxV8"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen = "true"></iframe>

        </div>
    </section>
</div>

);

}

export default Darksouls2