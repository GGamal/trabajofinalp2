import { useState } from 'react';
import axios from 'axios';
import React from 'react';
import '../styles/components/pages/Contacto.css'

const Contacto = (props) => {

    // para el envio de mail

    const initialForm = {
        nombre:'',
        email: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }


    }

    // fin envio de mail
    return (

        <main className="principalc">
            <div className="columnaizquierda">
                <h2>Contacto</h2>
                <h3>Para mas info</h3>
                <form action="/contacto" method="post" className="login" onSubmit={handleSubmit}>
                    <p>
                        <label for="">Nombre</label>
                        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} ></input>
                    </p>

                    <p>
                        <label for="">Email</label>
                        <input type="text" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} ></input>
                    </p>
                   
                        <button type="submit" class="btn btn-secondary">Enviar</button>

                </form>

                {sending?<p>enviando...</p>:null}
                {msg? <p>{msg}</p>:null}
            </div>

            <div className="columnaderecha">
                <h2>Otras vias de contacto</h2>
                <p>Tambien se puede comunicar con nosotros</p>
                <ul>
                    <li>Telefono:2134-4564</li>
                    <li>Email:</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Discord:</li>
                </ul>


            </div>


        </main>


    );

}

export default Contacto