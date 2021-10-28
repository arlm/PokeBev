import styles from './Machine.module.css';
import { useState } from "react";
import { Button, Modal, ModalTitle, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import Machine from "./Machine";
import Pokebola from './pokebola.gif';


export default function ScreenMachines() {
    const [show, setShow] = useState(false);


  return (
    <>
      <Button className='mt-4' variant='secondary' onClick={() => setShow(true)}> Machines </Button>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
          <ModalHeader closeButton>
              <ModalTitle><img src={Pokebola} width={30}/> Machines </ModalTitle>
          </ModalHeader>
          <ModalBody className={styles.fundo}>
              <Machine />
          </ModalBody>
      </Modal>

    </>
  );
}