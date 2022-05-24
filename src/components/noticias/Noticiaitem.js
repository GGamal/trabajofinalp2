import React from 'react';


 const NoticiaItem = (props) => {
     
    const {title,imagen,body} = props;

    return(
        <div className="noticias">

            <img src={imagen} alt=""/>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{__html:body}}></div>
            <hr></hr>

        </div>
    );
 }
 
 export default NoticiaItem;