import { useEffect, useState } from "react";
import PokeLoagind from "./loading.gif";
import styles from "./VersionGroup.module.css";
import { Card, ListGroup, Modal } from "react-bootstrap";
import ImgDoPokemon from "../../CardPokemon/CardPokemon";

function VersionGroup() {
  const [vGroups, setVGroups] = useState<any>();
  const [vGroup, setVGroup] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const pegaVGroups = async () => {
      const resposta = await fetch("https://pokeapi.co/api/v2/version-group");
      const objGenerations = await resposta.json();
      setVGroups(objGenerations.results);
    };
    pegaVGroups();
  }, []);

  const getGeneration = async (versionGroup: any) => {
    setLoading(true);
    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/version-group/${versionGroup}`
      );
      const objGeneration = await resposta.json();
      setVGroup(objGeneration.versions);
      setLoading(false);
    } catch (error) {}
  };

  return (
    <div className="d-flex d-flex justify-content-center mt-5 py-3 ">
      {vGroups && !vGroup && !loading && (
        <>
          <Card className="border border-5 border-secondary mb-5" style={{ width: "60rem" }}>
            <Card.Header className={styles.headerCard}>
              Versão dos grupos dos Pokemons
            </Card.Header>
            <Card.Body className={styles.card}>
              <ListGroup variant="flush">
                {vGroups.map((gen: any) => (
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

      {vGroup && (
        <div className={`container ${styles.bodyModal}`}>
          <div className=" w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="align-items-center flex-wrap d-flex justify-content-evenly  ">
              {vGroup.map((pokemon: any) => (
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
