
import styles from './ModalBerry.module.css';
import {Modal, Button, } from  'react-bootstrap';
import {useEffect, useState} from 'react';

// interface ModalBerryData  {
 
//   name: string,
//   url: string,
//   natural_gift_power: number ,
//   natural_gift_type: string,
//   smoothness: number,
//   growth_time: number,
 
// }

function ModalBerry  (objBerries: any) {

  
  const [dataBerry, setDataBerry] = useState<any>();

    return(
            
    <div className={styles.ModalBerry} data-testid="ModalBerry">
      <Modal
        {...objBerries} //não é obrigatório, aqui faz a desestruturação do obj. 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {objBerries.detalhes.item.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Caracteríticas</h4>
          <p>
          Natural Gift Power: {objBerries.detalhes.natural_gift_power}: {objBerries.detalhes.natural_gift_type.name}<br></br>
          Smoothness: {objBerries.detalhes.smoothness}<br></br>
          Growth Time: {objBerries.detalhes.growth_time}<br></br>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={objBerries.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  
      );
   }

  

export default ModalBerry;
