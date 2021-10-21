import {useEffect, useState} from 'react';
import * as styles from './Berry.module.css';

/*const Berry = () => (
  <div className={styles.Berry} data-testid="Berry">
    Berry Component
  </div>
);*/


type BerryData = {
 
  name: string,
  url: string,
  natural_gift_power: any
}

function Berry  (parametros: BerryData)  {

   const [berries, setBerry] = useState<any>(undefined);

  useEffect(() => { //faz a chamada, mas nao tem resposta
    fetch(parametros.url)
    .then((response) => response.json()) //espera a resposta
    .then((data) => setBerry(data)); //espera o json ficar pronto
  }, []);
  
 if(!berries){
   //Resposta enquanto não temos a informação
  return (
  
    <div className={styles.default.Berry} data-testid="Berry">
      {parametros.name}
      {console.log(parametros.natural_gift_power)}
      
      {parametros.natural_gift_power}
    </div>
  )
  } else{ console.log(berries)
    //Resposta quando temos a informação
  return (
    <div>
      <div className={styles.default.Berry} data-testid="Berry">
        {/* <img src={berries.sprites.front_default}></img>
        <img src={berries.sprites.back_default}></img> */}
        {parametros.name}
        {console.log(parametros.natural_gift_power)}
        {parametros.natural_gift_power}
      </div>
      
    </div>  
  ) 
  }
}

export default Berry;
