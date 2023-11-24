// Componente Formulario
import React, { useState } from 'react';

import './formulario_stilo.css'

function FormularioView({ datos, actualizarDatos }) {
    const [nuevosDatos, setNuevosDatos] = useState({});

    const handleChange = (event) => {
        const { name, value, files } = event.target;

        // Si es un input de tipo file, procesamos el archivo seleccionado
        if (name === 'imagen' && files && files[0]) {
            const selectedFile = event.target.files[0];

            const imageURL = URL.createObjectURL(selectedFile);
            console.log(imageURL);
            setNuevosDatos({ ...nuevosDatos, [name]: imageURL });

        } else {
            setNuevosDatos({ ...nuevosDatos, [name]: value });
        }
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        actualizarDatos(nuevosDatos);
        setNuevosDatos({});
    };

    return (
        <div>
            <h2>Editar Perfil</h2>
            <form onSubmit={handleSubmit} className='formulario'>
                <input
                    type="file"
                    name="imagen"
                    accept="image/*"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="nombre"
                    value={nuevosDatos.nombre || datos.nombre}
                    placeholder="Nuevo nombre"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="cargo"
                    value={nuevosDatos.cargo || datos.cargo}
                    placeholder="Nuevo cargo"
                    onChange={handleChange}
                />
                {/* Otros campos de formulario para editar la imagen, etc. */}
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
}

export default FormularioView;
