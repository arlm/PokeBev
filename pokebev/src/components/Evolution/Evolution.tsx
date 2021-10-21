import React from 'react';
import styles from './Evolution.module.css';
import  {useEffect, useState} from 'react'

type PokemonDataEvolution = {
  url: string
}

function Evolution (params: PokemonDataEvolution) {
  const [ evolucao, setEvolucao ] = useState<any>(undefined)

  useEffect(() => { 
    fetch(params.url)
    .then((response) => response.json()) 
    .then((data) => setEvolucao(data)); 
  }, []);

  if (!evolucao) {
    return ( <div>Aguarde</div> );
  } else {

  return (
  
    <div className={styles.Evolution} data-testid="Evolution">
      {evolucao.chain.species.name}
    </div>

  ) }
  
}

// const Evolution = (params: PokemonDataEvolution) => (
  
//   <div className={styles.Evolution} data-testid="Evolution">
//     Evolution Component
//   </div>
// );

export default Evolution;
