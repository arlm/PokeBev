import { Link } from 'react-router-dom';
import styles from './Charmander.module.css';

function Charmander() {
  return (
    <>
      <p>
        <h1>Responsáveis pelo desenvolvimento do componente <Link className="link" to='/Games'>Games</Link> e <Link className="link" to='/Item'>Itens</Link></h1>

      </p>
      <div className='d-flex flex-row justify-content-center'>
        <div className={styles.ajuste}>
          <img
            alt='Imagem do grupo Charmander'
            className={styles.figura}
            src='https://media0.giphy.com/media/loLOM9vO0g8TwsVkFu/giphy.gif?cid=790b76119b86175510422ae390ebbb98b1a91b0653b0bc4e&rid=giphy.gif&ct=g'
          />
        </div>
        <div>
          <p>
            <h1>Gabe Berté</h1>
          </p>
          <p>
            <h1>Giu Zambot</h1>
          </p>
          <p>
            <h1>Jislane Santana</h1>
          </p>
          <p>
            <h1>Laurinha Ribeiro</h1>
          </p>
          <p>
            <h1>Mayhhara Morais</h1>
          </p>
        </div>
      </div>
    </>
  );
}

export default Charmander;
