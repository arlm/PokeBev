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

  const evoDetailsBase =  props.objetoEvolucao.chain.evolves_to[0].evolution_details[0]

  const listTopics = [
    evoDetailsBase.gender,
    evoDetailsBase.held_item,
    evoDetailsBase.item,
    evoDetailsBase.known_move,
    evoDetailsBase.known_move_type,
    evoDetailsBase.location,
    evoDetailsBase.min_affection,
    evoDetailsBase.min_beauty,
    evoDetailsBase.min_happiness,
    evoDetailsBase.min_level,
    evoDetailsBase.needs_overworld_rain,
    evoDetailsBase.party_species,
    evoDetailsBase.party_type,
    evoDetailsBase.relative_physical_stats,
    evoDetailsBase.time_of_day,
    evoDetailsBase.trade_species,
  ];

 

  function baseEvoDetails(){
    let list = []
    for (let i = 0; i < listTopics.length; i++) {
      if(listTopics[i]){
        list.push(`${Object.keys(evoDetailsBase)[i]}:${listTopics[i]}`);
      }      
    }
    return list
  }; 

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
          {props.pokeName}
          <p>{showIf()}</p>
          <p>{baseEvoDetails()}</p>
          
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EvolutionCard;
