import { useEffect, useState } from "react";
import PokeLoagind from "./loading.gif";
import styles from "./VersionGroup.module.css";
import { Card, ListGroup, Modal } from "react-bootstrap";
import ImgDoPokemon from "../../CardPokemon/CardPokemon";

function VersionGroup() {
  const [generations, setGenerations] = useState<any>();
  const [generation, setGeneration] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const pegaGeracoes = async () => {
      const resposta = await fetch("https://pokeapi.co/api/v2/generation");
      const objGenerations = await resposta.json();
      setGenerations(objGenerations.results);
    };
    pegaGeracoes();
  }, []);

  const getGeneration = async (nameGeneration: any) => {
    setLoading(true);
    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/generation/${nameGeneration}`
      );
      const objGeneration = await resposta.json();
      setGeneration(objGeneration.pokemon_species);
      setLoading(false);
    } catch (error) {}
  };

  const closeModal = () => {
    setGeneration(null);
  };

  return (
    <div className="d-flex d-flex justify-content-center mt-5 py-3 ">
      {generations && !generation && !loading && (
        <>
          <Card className="border border-5 border-secondary mb-5" style={{ width: "60rem" }}>
            <Card.Header className={styles.headerCard}>
              Versão dos grupos dos Pokemons
            </Card.Header>
            <Card.Body className={styles.card}>
              <ListGroup variant="flush">
                {generations.map((gen: any) => (
                  <ListGroup.Item className={styles.card}
                    key={gen.name}
                    onClick={() => getGeneration(gen.name)}
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

      {generation && (
        <div className={`container ${styles.bodyModal}`}>
          <div className=" w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="align-items-center flex-wrap d-flex justify-content-evenly  ">
              {generation.map((pokemon: any) => (
                <ImgDoPokemon pokeName={pokemon.name} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VersionGroup;
