import '../styles/components/pages/Darksouls.css'

const Darksouls = (props) => {
return (
<div className="darksoul">
  <section className="sectionds">


    <div className="card">
      <img src="img/DS1/ds1.jpg" alt="" />
      <h3>Plataformas</h3>
      <h3>PS3 XBOX360 PC</h3>

    </div>

    <div className="floatr">
      <h1>Historia</h1>
      <h3>Dark Souls (ダークソウル Dāku Souru) es un videojuego de rol de acción, desarrollado por FromSoftware para las
        plataformas PlayStation 3,
        Xbox 360 y Microsoft Windows, distribuido por Bandai Namco Entertainment.</h3>
      <h3>Anteriormente conocido como Project Dark. Su lanzamiento fue el 22 de septiembre de 2011 en Japón, 4 de
        octubre en Norteamérica, 6 de octubre de 2011 en Australasia y 7 de octubre en Europa. El 24 de agosto
        de 2012, se lanzó la edición Prepare to Die para PC, presentando contenido adicional previamente
        inaccesible para los usuarios de PlayStation 3 y Xbox 360. El 23 de octubre de 2012,
        el contenido adicional de la versión PC fue publicado como contenido descargable para consolas bajo el
        título Artorias of the Abyss.</h3>
      <h3>Dark Souls tiene lugar en el reino ficticio llamado Lordran. Los jugadores toman el papel de un
        personaje humano maldito que ha sido elegido para realizar un peregrinaje para descubrir el destino de
        los no muertos. El argumento del juego se va contando fundamentalmente a través de descripciones de
        objetos del juego, y diálogos con personajes no jugables (PNJs). Los jugadores deben ir reuniendo pistas
        para poder entender la historia. Dark Souls se labró un gran reconocimiento por su extenuante dificultad
        e implacable desafío.
        El mundo del juego está lleno de armas, armaduras y objetos consumibles que tienen como objetivo ayudar
        al jugador durante su viaje.</h3>
    </div>

  </section>
  <section className="sectiondlc1">
    <div className="card2">
      <img src="img/DS1/preparetodie.jpg" alt="" />

    </div>
    <div className="floatl">
      <h1>Prepare to Die Edition</h1>
      <h3>Dark Souls: Prepare to Die Edition es la versión para PC del juego. Hasta su lanzamiento, el juego estaba
        disponible sólo en PS3 y Xbox 360.</h3>
      <h3>El lanzamiento del juego tuvo lugar el 24 de agosto de 2012 e incluye el DLC Artorias of the Abyss, el cual
        incluye nuevos jefes, armas y localizaciones. El DLC Artorias of the Abyss está también disponible como descarga
        separada en Xbox 360 y PlayStation 3.</h3>
        <iframe className="preparetodie" width="854" height="480" src="https://www.youtube.com/embed/di2bA8grsAI" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "true" ></iframe>
    </div>
  </section>
</div>


);
}
export default Darksouls;