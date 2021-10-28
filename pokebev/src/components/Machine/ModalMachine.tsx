import { useState } from "react";
import { Modal } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { ModalBody, ModalTitle } from "react-bootstrap";
import Machine from "./Machine";



export default function ModalScreen() {
    const [show, setShow] = useState(true);

  return (
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
          <ModalHeader closeButton>
              <ModalTitle> Lista de Machines (TMs) </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Machine />
          </ModalBody>
      </Modal>
  );
}