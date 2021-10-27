import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
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
  
  
    const levelBase =
      props.objetoEvolucao.chain.evolves_to[0].evolution_details[0].trigger
        .name;

  const evoDetailsBase =
    props.objetoEvolucao.chain.evolves_to[0].evolution_details[0];
  

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


  function baseEvoDetails() {
    let list = [];
    for (let i = 0; i < listTopics.length; i++) {
      if (listTopics[i] && levelBase != "use-item") {
        list.push(`${Object.keys(evoDetailsBase)[i]} : ${listTopics[i]}`);
      } else if (levelBase == "use-item") {
        list.push(evoDetailsBase.item.name);
      }
    }
    if (list[0] == list[1]) {
      return list[0];
    } else {
      return list;
    }
  }


  //pegando dados da primeira evolução

  const levelFirstEvo =
    props.objetoEvolucao.chain.evolves_to[0].evolves_to[0].evolution_details[0]
      .trigger.name;

  const detailsFirstEvo =
    props.objetoEvolucao.chain.evolves_to[0].evolves_to[0].evolution_details[0];




  const listFirstTopics = [
    detailsFirstEvo.gender,
    detailsFirstEvo.held_item,
    detailsFirstEvo.item,
    detailsFirstEvo.known_move,
    detailsFirstEvo.known_move_type,
    detailsFirstEvo.location,
    detailsFirstEvo.min_affection,
    detailsFirstEvo.min_beauty,
    detailsFirstEvo.min_happiness,
    detailsFirstEvo.min_level,
    detailsFirstEvo.needs_overworld_rain,
    detailsFirstEvo.party_species,
    detailsFirstEvo.party_type,
    detailsFirstEvo.relative_physical_stats,
    detailsFirstEvo.time_of_day,
    detailsFirstEvo.trade_species,
  ];


  function firstEvoDetails() {
    let listFirst = [];
    for (let i = 0; i < listFirstTopics.length; i++) {
      if (listFirstTopics[i] && levelFirstEvo != "use-item") {
        listFirst.push(`${Object.keys(detailsFirstEvo)[i]} : ${listFirstTopics[i]}`);
      } else if (levelFirstEvo == "use-item") {
        listFirst.push(detailsFirstEvo.item.name);
      }
    }
    if (listFirst[0] == listFirst[1]) {
      return listFirst[0];
    } else {
      return listFirst;
    }
  }

 

  
  return (
    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{props.pokeName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={styles.EvolutionCard} data-testid="EvolutionCard">
          {props.pokeName}
          <p>{levelBase}</p>
          <p>{baseEvoDetails()}</p>
        </div>

        <div className={styles.EvolutionCard} data-testid="EvolutionCard">
          {props.pokeFirst}
          <p>{levelFirstEvo}</p>
          <p>{firstEvoDetails()}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
  
};;

export default EvolutionCard;
