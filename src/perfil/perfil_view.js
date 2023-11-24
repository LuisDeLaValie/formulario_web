// Componente Perfil
import React from 'react';

import './perfil_stilo.css'

function PerfilView({ datos }) {
  return (
    <div>
      <h2>Perfil</h2>
      <p>Nombre: {datos.nombre}</p>
      <p>Cargo: {datos.cargo}</p>
      <img src={datos.imagen} alt="Imagen de perfil" />
    </div>
  );
}

export default PerfilView;
