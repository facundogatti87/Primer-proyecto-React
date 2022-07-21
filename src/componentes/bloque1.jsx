import React from 'react';
import "../estilos/bloque1.css"

function Bloque1(props) {
  return (
    <div className='contenedorTextoBloque1'>
      <h5
        className='contenedorTituloBloque1'>{props.titulo1}
      </h5>
      <h5
        className='contenedorTituloBloque1'>{props.titulo2}
      </h5>
      <p
        className='contenedorParrafoBloque1'>{props.texto}
      </p>
    </div>
  );
}

export default Bloque1;