import { useEffect, useState } from 'react';
import PokeLoagind from './loading.gif';
import styles from './Games.module.css';
import { Card, ListGroup, Modal } from 'react-bootstrap';

function Games() {
  const [generations, setGenerations] = useState<any>();
  const [generation, setGeneration] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const pegaGeracoes = async () => {
      const resposta = await fetch('https://pokeapi.co/api/v2/generation');
      const objGenerations = await resposta.json();
      setGenerations(objGenerations.results);
    }
    pegaGeracoes();
  }, []);

  const getGeneration = async (nameGeneration: any) => {
    setLoading(true);
    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/generation/${nameGeneration}`);
      const objGeneration = await resposta.json();
      setGeneration(objGeneration.pokemon_species);
      setLoading(false);
    } catch (error) {

    }
  }

  const closeModal = () => {
    setGeneration(null);
  }

  return (
    <div className={styles.Games}>
      {
        (generations && !generation && !loading) &&
        (
          <>
            <Card style={{ width: '18rem' }}>
              <Card.Header>Gerações dos Pokemons</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {generations.map((gen: any) => <ListGroup.Item key={gen.name} onClick={() => getGeneration(gen.name)}>{gen.name}</ListGroup.Item>)}
                </ListGroup>
              </Card.Body>
            </Card>
          </>
        )
      }

      {loading &&
        (
          <div className={styles.loading}>
            <img src={PokeLoagind} alt="Loading" />
            <h1>Carregando... </h1>
          </div>
        )
      }

      {
        generation &&
        (
          <Modal.Dialog>
            <Modal.Header closeButton onClick={closeModal}>
              <Modal.Title>{generation.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <ListGroup variant="flush">
                {generation.map((pokemons: any) => <ListGroup.Item key={pokemons.name}>{pokemons.name}</ListGroup.Item>)}
              </ListGroup>
            </Modal.Body>
          </Modal.Dialog>
        )
      }
    </div >
  )
};

export default Games;
