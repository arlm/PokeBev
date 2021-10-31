import { Link } from "react-router-dom";
import styles from "./Jigglypuff.module.css";

function Jigglypuff() {
  return (
    <>
      <p>
        <h1>Responsáveis pelo desenvolvimento do componentes <Link className="link" to='/Machine'>Machines</Link> e Locations (clicar no menu acima) </h1>
        Locations e Machines
      </p>
      <div className="d-flex flex-row justify-content-center">
        <div className={styles.ajuste}>
          <img
            alt='Grupo Jigglypuff'
            className={styles.figura}
            src="https://media.izi.travel/4e9d2b2c-83c3-4a84-8675-7cc276270305/c5078770-9124-4363-92a2-f7722d162ecf_800x600.jpg"
          ></img>
        </div>
        <div>
          <p>
            <h1>Emily Roberta</h1>
          </p>
          <p>
            <h1>Izabela Gonzaga</h1>
          </p>
          <p>
            <h1>Luana Kuster</h1>
          </p>
          <p>
            <h1>Rafaela Bitencourt</h1>
          </p>
        </div>
      </div>
    </>
  );
}

export default Jigglypuff;