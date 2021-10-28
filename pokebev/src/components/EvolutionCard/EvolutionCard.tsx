import React, { useEffect, useState } from 'react';
import { Alert, Modal } from 'react-bootstrap';
import Evolution from '../Evolution/Evolution';
import styles from './EvolutionCard.module.css';

const EvolutionCard = (props: {
  showModal: boolean;
  pokeName?: string;
  objetoEvolucao?: any;
  pokeFirst?: string;
}) => {
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

  // pegando dados do pokemon Base    
  const detailsBaseEvo =
    props.objetoEvolucao.chain.evolves_to[0]?.evolution_details[0];

  // pegando dados da primeira evolução

  const detailsFirstEvo =
    props.objetoEvolucao.chain.evolves_to[0]?.evolves_to[0]?.evolution_details[0]; 

  function showDetails(details: any) {
    const trigger = details.trigger.name;

     let list = [];

    
    for (const key in details) { 
      
        const element = details[key];
        if(element && trigger != "use-item"){
          if (typeof element === "object") {
            list.push(
              <span>
                <b className="key">{key}</b> :{" "}
                <span className="value">{element.name}</span>
              </span>
            );
          } else {            
            list.push(
              <span>
                <b className="key">{key}</b> :{" "}
                <span className="value">{element}</span>
              </span>
            );
          }
        }         
      
    };
    if (trigger == "use-item") {
          list.push(<span className = "value">{details.item.name}</span>);
        }
    return list
    
    
  } 

  
  return (
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{props.pokeName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {detailsBaseEvo && (
          <div className={styles.EvolutionCard} data-testid="EvolutionCard">
            <h3>{props.pokeName}</h3>

            <ul>
              {showDetails(detailsBaseEvo).map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {!detailsBaseEvo && (
          <div className={styles.EvolutionCard} data-testid="EvolutionCard">
            <Alert variant="danger">Não há mais evoluções</Alert>
          </div>
        )}

        {detailsFirstEvo && (
          <div className={styles.EvolutionCard} data-testid="EvolutionCard">
            <h3>{props.pokeFirst}</h3>

            <ul>
              {showDetails(detailsFirstEvo).map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {!detailsFirstEvo && (
          <div className={styles.EvolutionCard} data-testid="EvolutionCard">
            <Alert variant="info">Não há mais evoluções</Alert>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
  
};;

export default EvolutionCard;
