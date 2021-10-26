import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import styles from './EvolutionCard.module.css';

const EvolutionCard = (props:{showModal:boolean})=>{  
  const [fullscreen, setFullscreen] = useState<
    | true
    | "sm-down"
    | "md-down"
    | "lg-down"
    | "xl-down"
    | "xxl-down"
    | undefined
  >(true);
  const [show, setShow] = useState(false);

  function handleShow() {
    setFullscreen(true);
    setShow(true);
  } 
  
  useEffect(() => {
    if(props.showModal){
    handleShow();
  }else{
    setShow(false)
  };
  }, []);




  return(    
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className={styles.EvolutionCard} data-testid="EvolutionCard">
    EvolutionCard Component
    </div></Modal.Body>
      </Modal>
  
  );
   
};

export default EvolutionCard;
