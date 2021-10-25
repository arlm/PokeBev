import  {useEffect, useState} from 'react'
import * as styles from './Pokemon.module.css';

type PokemonData = {
 
  name: string,
  url: string
}

function Pokemon  (parametros: PokemonData)  {

   const [pokemon, setPokemon] = useState<any>(undefined);

  useEffect(() => { //faz a chamada, mas nao tem resposta
    fetch(parametros.url)
    .then((response) => response.json()) //espera a resposta
    .then((data) => setPokemon(data)); //espera o json ficar pronto
  }, []);
 
 if(!pokemon){
   //Resposta enquanto não temos a informação
  return (
  
    <div className={styles.default.Pokemon} data-testid="Pokemon">
      {parametros.name}
    </div>
  )
  } else{ console.log('')
    //Resposta quando temos a informação
  return (
  
    <div className={styles.default.Pokemon} data-testid="Pokemon">
      <img src={pokemon.sprites.front_default}></img>
      <img src={pokemon.sprites.back_default}></img>
      {parametros.name}
    </div>
  ) 
  }
}

export default Pokemon;
