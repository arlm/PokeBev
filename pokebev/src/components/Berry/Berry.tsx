import {useEffect, useState} from 'react';
import BerryImage from '../BerryImage/BerryImage';
import * as styles from './Berry.module.css';



type BerryData = {
 
  name: string,
  url: string,
 
}

interface Data  {
  natural_gift_power: number ,
  name: string,
  item: BerryData
}

function Berry  (parametros: BerryData)  {

   const [berries, setBerry] = useState<Data | undefined>(undefined);
   

  useEffect(() => { //faz a chamada, mas nao tem resposta
    fetch(parametros.url)
    .then((response) => response.json()) //espera a resposta
    .then((data)=> setBerry(data)); //espera o json ficar pronto
  }, []);

  
 if(!berries){
   //Resposta enquanto não temos a informação
  return (
  
    <div className={styles.default.Berry} data-testid="Berry">
      {parametros.name}
           
      carregando berries...

    </div>
  )
  } else{ 
    //Resposta quando temos a informação
    
  return (
    <div>
      <div className={styles.default.Berry} data-testid="Berry">
        
        {berries.name}
        <BerryImage name={berries.item.name} url={berries.item.url} />
        <ul>
          <li>
            Natural Gift Power:{berries.natural_gift_power}
          </li>
        </ul>
        
      </div>
      
    </div>  
  ) 
  }
}

export default Berry;
