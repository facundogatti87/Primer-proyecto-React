import logo from './logo.svg';
import './App.css';
import Cajas from './componentes/caja';

function App() {
  return (
    <div className="App">
      <div className='contenedorCajas'>
        <Cajas 
          imagen='lago.jpg'
          altImagen='Foto de un lago'
          titulo='Viajes en el Lago'
          texto='Les presentamos una gran variedad de espectaculares lagos'
        />
        <Cajas 
          imagen='ciudad.jpg'
          altImagen='Foto de una ciudad'
          titulo='Viajes en la Ciudad'
          texto='Les presentamos una gran variedad de ciudades para conocer'
        />
        <Cajas 
          imagen='mar.jpg'
          altImagen='Foto de una playa'
          titulo='Viajes a Playas'
          texto='Les presentamos diferentes playas para descubrir y disfrutar el sol'
        />
      </div>
    </div>
  );
}

export default App;