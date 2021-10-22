import { useState } from "react";
import { Button, Modal, ModalTitle, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";


export default function ScreenLocations() {
    const [show, setShow] = useState(false);


  return (
    <>
      <Button className='mt-4' variant='secondary' onClick={() => setShow(true)}> Locations </Button>

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