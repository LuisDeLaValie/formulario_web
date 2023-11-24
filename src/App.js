import { useState } from 'react';
import './App.css';
import FormularioView from './formulario/formulario_view';
import PerfilView from './perfil/perfil_view';

function App() {
  const [datosPerfil, setDatosPerfil] = useState({
    nombre: 'Nombre por defecto',
    cargo: 'Cargo por defecto',
    imagen: 'ruta/a/imagen.jpg',
  });

  const actualizarDatosPerfil = (nuevosDatos) => {
    setDatosPerfil({ ...datosPerfil, ...nuevosDatos });
  };

  return (
    <div>
      <PerfilView datos={datosPerfil} />
      <FormularioView datos={datosPerfil} actualizarDatos={actualizarDatosPerfil} />
    </div>
  );
}

export default App;
