import styles from './Location.module.css';
import { useState } from "react";
import { Button, Modal, ModalTitle, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import Location from "./Location";
import Pokebola from './pokebola.gif';

export default function ScreenLocations() {
    const [show, setShow] = useState(false);


  return (
    <>
      <Button className='mt-4' variant='secondary' onClick={() => setShow(true)}> Locations </Button>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
          <ModalHeader closeButton>
              <ModalTitle><img src={Pokebola} width={30}/> Locations </ModalTitle>
          </ModalHeader>
          <ModalBody className={styles.pokemap}>
            <p>
                <Location />
            </p>
          </ModalBody>
      </Modal>

    </>
  );
}