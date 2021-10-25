import { useState } from "react";
import { Button, Modal, ModalTitle, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import Machine from "./Machine";


export default function ScreenMachines() {
    const [show, setShow] = useState(false);


  return (
    <>
      <Button className='mt-4' variant='secondary' onClick={() => setShow(true)}> Machines </Button>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
          <ModalHeader closeButton>
              <ModalTitle> Machines </ModalTitle>
          </ModalHeader>
          <ModalBody>
              <Machine />
          </ModalBody>
      </Modal>

    </>
  );
}