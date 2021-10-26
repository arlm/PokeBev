import { useEffect, useState } from "react";
import PokeLoagind from "./loading.gif";
import styles from "./Pokedexes.module.css";
import { Card, ListGroup, Modal } from "react-bootstrap";
import ImgDoPokemon from "../../CardPokemon/CardPokemon";

function Pokedexes() {
  const [pokedexes, setPokedexes] = useState<any>();
  const [pokedex, setPokedex] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const pegaPokedexes = async () => {
      const resposta = await fetch("https://pokeapi.co/api/v2/pokedex");
      const objPokedexes = await resposta.json();
      console.log(objPokedexes, "primeiro")
      setPokedexes(objPokedexes.results);
    };
    pegaPokedexes();
  }, []);

  const getPokedex = async (namePokedex: any) => {
    setLoading(true);
    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokedex/${namePokedex}`
      );
      const objPokedex = await resposta.json();
      setPokedex(objPokedex);
      console.log(objPokedex, "segundo")
      setLoading(false);
    } catch (error) {}
  };

  return (
    <div className="d-flex d-flex justify-content-center mt-5 py-3 ">
      {pokedexes && !pokedex && !loading && (
        <>
          <Card className="border border-5 border-secondary mb-5" style={{ width: "60rem" }}>
            <Card.Header className={styles.headerCard}>
              Gerações dos Pokemons
            </Card.Header>
            <Card.Body className={styles.card}>
              <ListGroup variant="flush">
                {pokedexes.map((gen: any) => (
                  <ListGroup.Item className={styles.card}
                    key={gen.name}
                    onClick={() => getPokedex(gen.name)}
                  >
                    {gen.name.toUpperCase()}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </>
      )}

      {loading && (
        <div className={styles.loading}>
          <img src={PokeLoagind} alt="Loading" />
          <h1>Carregando... </h1>
        </div>
      )}

      {pokedex && (
        <div className={`container ${styles.bodyModal}`}>
          <div className=" w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="align-items-center flex-wrap d-flex justify-content-evenly  ">
              {pokedex.map((pokemon: any) => (
                <ImgDoPokemon pokeName={pokemon.pokemons_entries.pokemon_species.toLowerCase()} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pokedexes;
