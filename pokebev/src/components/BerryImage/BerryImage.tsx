import {useEffect, useState} from 'react';
//import * as styles from './BerryImage.module.css';

type BerryImageData = {

  name: string,
  url: string,
}

interface Data  {
  sprites:{default: string}
}

function BerryImage(parametros: BerryImageData) {

  const [item, setItem] = useState<Data | undefined>(undefined);

  useEffect(() => {
    fetch(parametros.url)
      .then((response) => response.json()) //espera a resposta
      .then((data) =>setItem(data));
  }, []);

  if(!item){
     return ( <span>...</span> );
  }else{
    return (
      <img src={item.sprites.default}></img>

    );
  }
}

export default BerryImage;
