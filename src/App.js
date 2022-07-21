import logo from './logo.svg';
import './App.css';
import Cajas from './componentes/caja';
import Bloque1 from './componentes/bloque1';

function App() {
  return (
    <div className="App">

      <Bloque1
        titulo1='NOS DEDICAMOS A POTENCIAR TU NEGOCIO'
        titulo2='APORTANDO VALOR, PROFESIONALISMO Y COMPROMISO '
        texto= 'Con más de 10 años de experiencia en el campo de la tecnología, tenemos el know how necesario para superar cualquier desafío empresarial'
      />

      <div className='contenedorCajas'>
        <Cajas
          imagen='datacenter.jpg'
          altImagen='Datacenter'
          titulo='Cableado estructurado'
          texto='Contamos con amplia experiencia y profesionales aptos para todo tipo de requerimiento'
        />
        <Cajas
          imagen='reportesgerenciales.jpg'
          altImagen='Reportes gerenciales'
          titulo='Reportes gerenciales'
          texto='Recopilación, analisis y recomendaciones específicas para tomar las mejores decisiones'
        />
      </div>
      <div className='contenedorCajas'>
        <Cajas
          imagen='estandarizacion.jpg'
          altImagen='Diagrama de flujo'
          titulo='Estandarización de procesos'
          texto='Te ayudamos a definir y mejorar los procesos de tu empresa, optimizando tiempo y recursos'
        />
        <Cajas
          imagen='soporteIT.jpg'
          altImagen='IT support'
          titulo='Soporte Técnico especializado'
          texto='Mantenimiento preventivo y correctivo. Asistencia técnica para todos nuestros productos y servicios'
        />
      </div>
    </div>
  );
}

export default App;