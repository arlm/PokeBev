import { useRef, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./CardPokemon.module.css";
import placeholder from './placeholder.gif'

interface pokemonDadosTypes {
  name: string,
  sprites: string,
  stats: object[]
}

function CardPokemon({
  pokeName,
  filtro,
}: {
  pokeName: string;
  filtro: string[];
}) {
  const [pokeDados, setPokeDados] = useState<any>();
  const mountedRef = useRef(true);
  const pokemonEndPoint = 'https://pokeapi.co/api/v2/pokemon';
  const [loading, setloading] = useState<boolean>(true);

  useEffect(() => {
    const pegaPokemon = async () => {
      const respostaAPI = await fetch(`${pokemonEndPoint}/${pokeName}`);
      const objPokemon = await respostaAPI.json();
      const arrVersions: string[] = objPokemon.game_indices
        .map(({ version: { name } }: { version: { name: string } }) => name);
      const pokemonDados: pokemonDadosTypes = {
        name: objPokemon.name,
        sprites: objPokemon.sprites.other["official-artwork"].front_default,
        stats: objPokemon.stats
      }
      if (filtro.length) {
        for (const item of filtro) {
          if (arrVersions.includes(item)) {
            setPokeDados(pokemonDados);
            break;
          }
        }
      } else {
        setPokeDados(pokemonDados);
      }
      setloading(false);
    };
    pegaPokemon();
    return () => { mountedRef.current = false }
  }, [filtro, pokeName]);

  return (
    <>
      {pokeDados ? (
        <Card
          className={styles.pokeCard}
          style={{ width: "18rem" }}
        >
          <Card.Img
            className={styles.imgPlaceholder}
            variant="top"
            src={pokeDados.sprites}
          />

          <Card.Body>
            <Card.Title className={styles.cardTitle}>
              <img className={styles.pokeGif} src={`https://www.smogon.com//dex/media/sprites/xy/${pokeDados.name}.gif`} alt={'Gif pokemon ' + pokeDados.name} />{pokeDados.name.toUpperCase()}
            </Card.Title>
            <Card.Text>
              <div className={styles.status}>
                {pokeDados.stats.map((stats: any, index: number) => (
                  <div key={pokeDados.name + stats.stat.name}>
                    <div>
                      {stats.stat.name} {stats.base_stat}
                    </div>
                    <span
                      className={styles['status' + index]}
                      key={"stat" + pokeDados.name + stats.stat.name}
                      style={{ width: stats.base_stat * 2 + "px" }}
                    ></span>
                  </div>
                ))}
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        loading && <p><img className={styles.imgCarregando} src={placeholder} alt="Carregando" /></p>
      )
      }
    </>
  );
}

export default CardPokemon;
