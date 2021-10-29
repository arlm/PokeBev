
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
            <b>{objBerries.detalhes.item.name.toUpperCase()}</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4><em>Características</em></h4>
          <p>
          <b>Natural Gift Power:</b> {objBerries.detalhes.natural_gift_type.name}- <b>valor:</b> {objBerries.detalhes.natural_gift_power}<br></br>
          <b>Smoothness:</b> {objBerries.detalhes.smoothness}<br></br>
          <b>Growth Time: </b>{objBerries.detalhes.growth_time}<br></br>
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
