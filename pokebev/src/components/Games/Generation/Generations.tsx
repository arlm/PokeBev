import { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import PokeLoagind from '../loading.gif';
import styles from '../Games.module.css';
import CardPokemon from '../../CardPokemon/CardPokemon';

function Games() {
  const [generations, setGenerations] = useState<string[]>([]);
  const [generation, setGeneration] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const endPointGenerations = 'https://pokeapi.co/api/v2/generation';

  useEffect(() => {
    const pegaGeracoes = async () => {
      const respostaAPI = await fetch(endPointGenerations);
      const { results } = await respostaAPI.json();
      const ArrGenerations: string[] = results.map(({ name }: { name: string }) => name);
      Array.isArray(ArrGenerations) ? setGenerations(ArrGenerations) : setGenerations([]);
    };
    try {
      pegaGeracoes();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getGeneration = async (nameGeneration: string) => {
    setLoading(true);
    try {
      const respostaAPI = await fetch(`${endPointGenerations}/${nameGeneration}`);
      const { pokemon_species } = await respostaAPI.json();
      const ArrPokemons: string[] = pokemon_species.map(({ name }: { name: string }) => name);
      Array.isArray(ArrPokemons) ? setGenerations(ArrPokemons) : setGenerations([]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.mainBox}>
      {generations.length && !generation.length && !loading &&
        <>
          <Card className={styles.cardBorder}>
            <Card.Header className={styles.headerCard}>
              Gerações dos Pokemons
            </Card.Header>
            <Card.Body className={styles.cardBody}>
              <ListGroup variant='flush'>
                {generations.map((generation: string) => (
                  <ListGroup.Item className={styles.cardItem}
                    key={generation}
                    onClick={() => getGeneration(generation)}
                  >
                    {generation.toUpperCase()}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </>
      }

      {loading &&
        <div className={styles.loading}>
          <img src={PokeLoagind} alt='Loading' />
          <h1>Carregando... </h1>
        </div>
      }

      {generation.length &&
        <div className={styles.box}>
          <div onClick={() => setGeneration([])} className={styles.btnFechar}>X</div>
          {generation.map((pokemon: string) => (
            <CardPokemon pokeName={pokemon} filtro={[]} />
          ))}
        </div>
      }
    </main>
  );
}

export default Games;
