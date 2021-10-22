import  { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalScreen from './components/Machine/ModalMachine';
import { Button } from 'react-bootstrap';

function AppMachine() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div className='MachineButton'>
        <Button variant='secondary' onClick={() => setIsModalVisible(true)}> Machines </Button>
        {isModalVisible? <ModalScreen /> : null}
      </div>
    </>
  );
}

export default AppMachine;

