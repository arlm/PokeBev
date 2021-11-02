import { Link } from "react-router-dom";
import styles from "./Bulbasaur.module.css";

function Bulbasaur() {
  return (
    <>
      <p>
        <h1>Responsáveis pelo desenvolvimento do componente <Link className="link" to='/Berries'>Berries</Link></h1>
      </p>
      <div className="d-flex flex-row justify-content-center">
        <div className={styles.ajuste}>
          <img
            alt='Grupo Bulbasaur'
            className={styles.figura}
            src="https://media3.giphy.com/media/I2nZMy0sI0ySA/giphy.gif?cid=790b761124fd093d203c583ec2b32049954e0f065deaba1a&rid=giphy.gif&ct=g"
          ></img>
        </div>
        <div>
          <p>
            <h1>Clara Vasques</h1>
          </p>
          <p>
            <h1>Laila Cardoso</h1>
          </p>
          <p>
            <h1>Laurão Ribeiro</h1>
          </p>
          <p>
            <h1>Paloma Calado</h1>
          </p>
          <p>
            <h1>Úrsula Ariel</h1>
          </p>
        </div>
      </div>
    </>
  );

}

export default Bulbasaur;