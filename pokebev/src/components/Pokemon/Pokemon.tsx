import React from 'react'
import * as styles from './Pokemon.module.css';

type PokemonData = {
 
  name: string,
  url: string
}

const Pokemon = (parametros: PokemonData) => (
  <div className={styles.default.Pokemon} data-testid="Pokemon">
    {parametros.name}
  </div>
);

export default Pokemon;
