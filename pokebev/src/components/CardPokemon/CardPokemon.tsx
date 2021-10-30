import { useEffect, useState } from "react";
import styles from "./CardPokemon.module.css";
import { Card } from "react-bootstrap";

function CardPokemon({
  pokeName,
  filtro,
}: {
  pokeName: string;
  filtro: string[];
}) {
  const [pokeDados, setPokeDados] = useState<any>();
  const [mostrarPokemonFiltrado, setMostrarPokemonFiltrado] = useState<Boolean>(true);
  useEffect(() => {
    const pegaGeracoes = async () => {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      );
      const objPokemon = await resposta.json();
      //   const appArr: String[] = objGenerations.results.map((gen: { name: String }) => gen.name)

      const arrayIndices = objPokemon.game_indices;
      const arrVersions: string[] = arrayIndices.map(
        ({ version }: any) => version.name
      );

      if (filtro.length) {
        for (const item of filtro) {
          if (arrVersions.includes(item)) {
            setMostrarPokemonFiltrado(true);
            break;
          }
        }
      }

      setPokeDados(objPokemon);
    };
    pegaGeracoes();
  }, []);

  return (
    <>
      {pokeDados && mostrarPokemonFiltrado && (
        <Card
          className="border border-5 border-secondary mb-5"
          key={pokeDados.name}
          style={{ width: "18rem" }}
        >
          <Card.Img
            className={styles.bodyModal}
            variant="top"
            src={pokeDados.sprites.other["official-artwork"].front_default}
          />{" "}
          <Card.Body>
            <Card.Title className="d-flex justify-content-center">
              {" "}
              {pokeDados.name.toUpperCase()}
            </Card.Title>
            <Card.Text>
              <div className={styles.status}>
                Status:
                {pokeDados.stats.map((s: any) => (
                  <>
                    {" "}
                    <p>
                      {s.stat.name} {s.base_stat}
                    </p>
                    <span
                      key={"stat" + s.stat.name}
                      style={{ width: s.base_stat * 2 + "px" }}
                    ></span>
                  </>
                ))}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default CardPokemon;
