import styles from "./Squirtle.module.css"
import paloma from "./assets/paloma.jpg"
import cyro from "./assets/cyro.jpg"
import gabi from "./assets/gabi.jpg"
import mari from "./assets/mari.jpg"
import eudes from "./assets/eudes.png"

function Squirtle() {
  return (
    <>
      <p>
        <h1>
          Responsáveis pelo desenvolvimento dos componentes{" "}
          <a className={styles.link} href="/Evolution">
            Evolution
          </a>{" "}
          e{" "}
          <a className={styles.link} href="/Encounter">
            Encounter
          </a>
        </h1>
      </p>
      <div className="d-flex flex-row justify-content-center">
        <div className={styles.ajuste}>
          <img
            alt="Grupo Squirtle"
            className={styles.figura}
            src="https://i.giphy.com/media/5fQyd7jM58m5y/giphy.webp"
          ></img>
        </div>
        <ul className={styles.lista}>
          <li>
            <img src={cyro} />
            <a
              className={styles.link}
              href="https://github.com/Cyro56"
              target="_blank"
            >
              Cyro Renato
            </a>
          </li>
          <li>
            <img src={eudes} />
            <a
              className={styles.link}
              href="https://github.com/eron300"
              target="_blank"
            >
              Eudes Rodrigues
            </a>
          </li>
          <li>
            <img src={gabi} />
            <a
              className={styles.link}
              href="https://github.com/gabpandini"
              target="_blank"
            >
              Gabriela Pandini
            </a>
          </li>
          <li>
            <img src={mari} />
            <a
              className={styles.link}
              href="https://github.com/mari-rufino-g"
              target="_blank"
            >
              Mari Rufino
            </a>
          </li>
          <li>
            <img src={paloma} />
            <a
              className={styles.link}
              href="https://github.com/plmsz"
              target="_blank"
            >
              Paloma Souza
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Squirtle
