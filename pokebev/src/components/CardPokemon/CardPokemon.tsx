import { ReactElement, useEffect, useState } from "react";
import styles from "./CardPokemon.module.css";
import { Card, ListGroup } from "react-bootstrap";

function ImgDoPokemon({
  pokeName,
  filtro,
}: {
  pokeName: string;
  filtro?: any;
}) {
  const [pokeDados, setPokeDados] = useState<any>();
  const [mostrar, setMostrar] = useState<Boolean>(false);
  /**como cada card ta recebendo so o nome, vamos passar isso como props para nosso novo componente, cada card vai fazer o fetch usando o nome q recebemos. Então a cada pokemon ele vai fazer um fetch, para isso precisamos de useEffect*/
  useEffect(() => {
    const pegaGeracoes = async () => {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      ); //**pegando cada nome do card e fazendo essa procura pelo nome na API  */
      const objPokemon =
        await resposta.json(); /**transformando em obj legivel */
      //   const appArr: String[] = objGenerations.results.map((gen: { name: String }) => gen.name)

      const arrayIndices = objPokemon.game_indices;

      const arrVersions: string[] = arrayIndices.map(
        ({ version }: any) => version.name
      );
      if (filtro && filtro.length) {
        for (const item of filtro) {
          if (arrVersions.includes(item)) {
            // condicional criada p filtro dos pokemons por versao (ex.: red)
            setMostrar(true);
            break
          }
        }
      } else {
        setMostrar(true);
      }

      setPokeDados(objPokemon);
    };
    pegaGeracoes(); /** chamar a função q escrevemos acima*/
  }, []);

  return (
    <>
      {mostrar && pokeDados && (
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
          {/**pegando a imagem da api*/}
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

export default ImgDoPokemon;
