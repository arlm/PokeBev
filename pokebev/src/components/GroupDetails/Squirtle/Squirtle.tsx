import styles from "./Squirtle.module.css";

function Squirtle() {
  return (
    <>
      <p>
        <h1>Responsáveis pelo desenvolvimento dos componentes <a className={styles.link} href="/Evolution" >Evolution</a> e <a className={styles.link} href="/Encounter" >Encounter</a></h1>
      </p>
      <div className="d-flex flex-row justify-content-center">
        <div className={styles.ajuste}>
          <img
            alt='Grupo Squirtle'
            className={styles.figura}
            src="https://i.giphy.com/media/5fQyd7jM58m5y/giphy.webp"
          ></img>
        </div>
        <div>
          <p>
            <h1>Gabriela Pandini</h1>
          </p>
          <p>
            <h1>Eudes Rodrigues</h1>
          </p>
          <p>
            <h1>Mari Rufino</h1>
          </p>
          <p>
            <h1>Paloma Souza</h1>
          </p>
          <p>
            <h1>Cyro Renato</h1>
          </p>
        </div>
      </div>
    </>
  );
}

export default Squirtle;