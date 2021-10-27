import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import Evolution from '../Evolution/Evolution';
import styles from './EvolutionCard.module.css';

const EvolutionCard = (props:{showModal:boolean, pokeName?:string, objetoEvolucao?:any})=>{
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
    if (props.showModal) {
      handleShow();
    } else {
      setShow(false);
    }
  }, []);

  const levelBase = props.objetoEvolucao.chain.evolves_to[0].evolution_details[0].trigger
      .name;

  function showIf(){
    if(levelBase){return levelBase}
    
  }

   

  return (
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{props.pokeName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.EvolutionCard} data-testid="EvolutionCard">
          <p>
            
            
            {
              showIf()
            }
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EvolutionCard;
