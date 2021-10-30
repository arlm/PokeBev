import { Card, ListGroup } from "react-bootstrap";
import styles from '../Games.module.css';

interface DadosGames {
  titulo: string,
  geterFunc: Function,
  arrayGames: string[]
}

function GamesCard({ titulo, geterFunc, arrayGames }: DadosGames) {
  return (
    <>
      <Card className={styles.cardBorder}>
        <Card.Header className={styles.headerCard}>
          {titulo}
        </Card.Header>
        <Card.Body className={styles.cardBody}>
          <ListGroup variant='flush'>
            {arrayGames.map((itemLista: string) => (
              <ListGroup.Item className={styles.cardItem}
                key={itemLista}
                onClick={() => geterFunc(itemLista)}
              >
                {itemLista.toUpperCase()}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  )
}

export default GamesCard;