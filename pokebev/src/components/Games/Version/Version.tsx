import { useEffect, useState } from "react";
import PokeLoagind from "./loading.gif";
import styles from "./Version.module.css";
import { Card, ListGroup } from "react-bootstrap";
import ImgDoPokemon from "../../CardPokemon/CardPokemon";

function Version() {
  const [versions, setVersions] = useState<any>();
  const [version, setVersion] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [filtroCor, setFiltroCor] = useState<string[]>([]);
  const [naoTem, setNaoTem] = useState<boolean>(false);

  useEffect(() => {
    const pegaVersoes = async () => {
      const resposta = await fetch("https://pokeapi.co/api/v2/version");
      const objVersions = await resposta.json();
      setVersions(objVersions.results);
    };
    pegaVersoes();
  }, []);

  const getVersion = async (nameVersion: any) => {
    if (nameVersion === "colosseum" || nameVersion === "xd") {
      setNaoTem(true);
      setVersion([{}]);
      return;
    }
    setLoading(true);
    setFiltroCor([nameVersion]);
    try {
      const resposta = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=1118&offset=0"
      );
      const objVersion = await resposta.json();
      setVersion(objVersion.results.reverse());
      setLoading(false);
    } catch (error) {}
  };

  return (
    <div className="d-flex d-flex justify-content-center mt-5 py-3 ">
      {versions && !version && !loading && (
        <>
          <Card
            className="border border-5 border-secondary mb-5"
            style={{ width: "60rem" }}
          >
            <Card.Header className={styles.headerCard}>
              Versão dos Pokemons
            </Card.Header>
            <Card.Body className={styles.card}>
              <ListGroup variant="flush">
                {versions.map((gen: any) => (
                  <ListGroup.Item
                    className={styles.card}
                    key={gen.name}
                    onClick={() => getVersion(gen.name)}
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

      {version && (
        <div
          onClick={() => setVersion(null)}
          className={`container ${styles.bodyModal}`}
        >
          <div className=" w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
            <div className="align-items-center flex-wrap d-flex justify-content-evenly  ">
              {version.map((version: any) => (
                <ImgDoPokemon pokeName={version.name} filtro={filtroCor} />
              ))}
            </div>
          </div>
        </div>
      )}

      {naoTem && (
        <div
          onClick={() => {setNaoTem(false); setVersion(null)} }
        >
          <div className=" w-100 d-flex justify-content-center ">
            
              <h1>NÃO HÁ POKEMONS PARA ESTA LISTA !!</h1>
          
          </div>
        </div>
      )}
    </div>
  );
}

export default Version;
