import { useState, useEffect } from 'react';
import axios from 'axios';
import NoticiaItem from '../components/noticias/Noticiaitem';

import '../styles/components/pages/Noticias.css'

const Noticias = (props) => {

    const [loading, setLoading] = useState(false);
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const cargarNoticias = async() =>{
            setLoading(true);
            // const response = await axios.get('${process.env.REACT_APP_API_URL}/api/novedades')
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNoticias(response.data);
            setLoading(false);
        };

        cargarNoticias();
    },[]);

    return (

       <section className='Noticiaspag'>
         <div>
           <h2 className='h2not'>Noticias</h2>

           {loading ? (
           <p className='pnot'>
               Cargando
           </p>):(
               noticias.map(item => <NoticiaItem key ={item.id}
                title = {item.titulo} 
                imagen = {item.imagen}
                body = {item.cuerpo}/>)
           )}

          </div>



       </section>
        
    );
    
}

export default Noticias