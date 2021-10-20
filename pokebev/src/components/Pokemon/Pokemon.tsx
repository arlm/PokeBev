import React from 'react'
import * as styles from './Pokemon.module.css';

const Pokemon = () => (
  <div className={styles.default.pokemon} data-testid="Pokemon">
    Pokemon Component
  </div>
);

export default Pokemon;
