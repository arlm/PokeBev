import  { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalScreen from './components/Machine/ModalMachine';
import { Button } from 'react-bootstrap';

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div className='MachineButton'>
        <Button className='mt-4' variant='secondary' onClick={() => setIsModalVisible(true)}> Machines </Button>
        {isModalVisible? <ModalScreen /> : null}
      </div>

      <div className='LocationsButton'>
        <Button className='mt-4' variant='secondary' onClick={() => setIsModalVisible(true)}> Locations </Button>
        {isModalVisible? <ModalScreen /> : null} 
      </div>
    </>
  );
}

export default App;

