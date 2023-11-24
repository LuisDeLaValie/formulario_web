// Componente Perfil
import React from 'react';

import './perfil_stilo.css'

function PerfilView({ datos }) {
  return (
    <div className='perfil-container'>
      <h2>Perfil</h2>
      <div className='perfil'>
        <img src={datos.imagen} alt="Imagen de perfil" className='perfil-image' />
        <div className='perfil-info'>
          <p><strong>Nombre:</strong> {datos.nombre}</p>
          <p><strong>Cargo:</strong> {datos.cargo}</p>
        </div>
      </div>
    </div>
  );
}

export default PerfilView;
