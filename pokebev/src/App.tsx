import  { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScreenMachines from './components/Machine/ModalMachine'
import ScreenLocations from './components/Location/ModalLocations'



function App() {

  return (
    <div className='Botoes'>
      <ScreenMachines />
      <ScreenLocations />
    </div>
  );
}

export default App;

