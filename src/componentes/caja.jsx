import React from 'react';
import "../estilos/caja.css"

function Cajas(props) {
  return ( // aqui escribimos todo el HTML que queremos que muestre el componente
    <div className='contenedorTexto'>
      <img
        className='contenedorImagen'
        src={require(`../imagenes/${props.imagen}`)}
        alt={props.altImagen} />
      <h5
        className='contenedorTitulo'>{props.titulo}
      </h5>
      <p
        className='contenedorParrafo'>{props.texto}
      </p>
      <button
        className='botonMasInfo'>Ver más información
      </button>
    </div>
  );
}

export default Cajas;