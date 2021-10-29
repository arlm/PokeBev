import { useEffect, useState } from "react";
import PokeLoagind from "./loading.gif";
import styles from "./Version.module.css";
import { Card, Figure, ListGroup } from "react-bootstrap";
import ImgDoPokemon from "../../CardPokemon/CardPokemon";
import FigureCaption from 'react-bootstrap/FigureCaption'

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
    } catch (error) { }
  };

  return (
    <div className={styles.tabela1}>
      {versions && !version && !loading && (
        <>
          <Card className="border border-5 border-secondary mb-5" style={{ width: "60rem" }}>
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
          onClick={() => setVersion(null)} className={`container ${styles.bodyModal}`}>
          <div className="align-items-center flex-wrap d-flex justify-content-evenly">
            {version.map((version: any) => (
              <ImgDoPokemon pokeName={version.name} filtro={filtroCor} />
            ))}
          </div>
        </div>
      )}

      {naoTem && (
        <div onClick={() => { setNaoTem(false); setVersion(null) }}>
          <Figure className={styles.blocoFigure}>
            <Figure.Image className={styles.finalFigure2}
              width={342}
              height={360}
              alt="pokemon colisseum"
              src="https://cdn.discordapp.com/attachments/899759071056515082/903011660590088202/220px-PokC3A9mon_Colosseum_cover.png"
            />
            <Figure.Image className={styles.finalFigure}
              width={342}
              height={360}
              alt="pokemon xd"
              src="https://cdn.discordapp.com/attachments/899759071056515082/903011605393080360/220px-PokC3A9mon_XD_Gale_of_Darkness_cover.png"
            />
            <Figure.Caption className={styles.FigureCaption}>
              NÃO HÁ POKEMONS NOVOS NESSAS VERSÕES !!
            </Figure.Caption>
          </Figure>
        </div>
      )}
    </div>
  );
}

export default Version;
