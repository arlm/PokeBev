import { useState } from "react";
import { Modal, ModalTitle, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";


export default function ModalScreen(this: any) {
    const [show, setShow] = useState(true);

  return (
      <>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
          <ModalHeader closeButton>
              <ModalTitle> Locations </ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut aliquam fuga officiis maiores excepturi quas consequatur nihil officia rerum esse voluptatem ratione voluptates veniam cupiditate iusto nemo provident, quidem similique!
            </p>
          </ModalBody>
      </Modal>

      </>
  );
}
