import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Modal } from 'react-bootstrap';

function Games() {
  const [generations, setGenerations] = useState<any>();
  const [generation, setGeneration] = useState<any>();

  useEffect(() => {
    const pegaGeracoes = async () => {
      const resposta = await fetch('https://pokeapi.co/api/v2/generation');
      const objGenerations = await resposta.json();
      setGenerations(objGenerations.results);
    }
    pegaGeracoes();
  }, []);

  const getGeneration = async (nameGeneration: any) => {
    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/generation/${nameGeneration}`);
      const objGeneration = await resposta.json();
      console.log(objGeneration.pokemon_species);

      setGeneration(objGeneration.pokemon_species);
    } catch (error) {

    }
  }

  const closeModal = () => {
    setGeneration(null);
  }

  return (
    <div>
      {
        generations &&
        (
          <>
            <Card style={{ width: '18rem' }}>
              <Card.Header>Gerações dos Pokemons</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {generations.map((gen: any) => <ListGroup.Item onClick={() => getGeneration(gen.name)}>{gen.name}</ListGroup.Item>)}
                </ListGroup>
              </Card.Body>
            </Card>
          </>
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
                {generation.map((pokemons: any) => <ListGroup.Item>{pokemons.name}</ListGroup.Item>)}
              </ListGroup>
            </Modal.Body>
          </Modal.Dialog>
        )
      }
    </div >
  )
};

export default Games;
