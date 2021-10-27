
import styles from './ModalBerry.module.css';
import {Modal, Button, } from  'react-bootstrap';
import {useEffect, useState} from 'react';

interface ModalBerryData  {
 
  name: string,
  url: string,
  natural_gift_power: number ,
  smoothness: number,
  growth_time: number,
 
}

function ModalBerry  (props: any, parametros:ModalBerryData ) {

  
  const [dataBerry, setDataBerry] = useState< ModalBerryData |undefined>(undefined);
  

  useEffect(() => { //faz a chamada, mas nao tem resposta
    fetch(parametros.url)
    .then((response) => response.json()) //espera a resposta
    .then((info)=> setDataBerry(info)); //espera o json ficar pronto
  }, []);

  if(dataBerry){
    //Resposta enquanto não temos a informação
   return (
   
     <div className={styles.ModalBerry} data-testid="ModalBerry">
       {parametros.name}
            
       carregando berries...
 
     </div>
   )
   }else{
      return(
            
    <div className={styles.ModalBerry} data-testid="ModalBerry">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Nome
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Caracteríticas</h4>
          <p>
          Natural Gift Power: {parametros.natural_gift_power} <br></br>
          Smoothness: {parametros.smoothness}'<br></br>
          Growth Time: {parametros.growth_time}'<br></br>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  
      );
   }

  
}

export default ModalBerry;
