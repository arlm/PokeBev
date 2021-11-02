import { useRef, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./CardCatItens.module.css";
import placeholder from './placeholder.gif';

interface pokemonDadosTypes {
  name: string,
  cost: number,
  effect: string[],
  attributes: string[],
  sprites: string,
}

function CardCatItens({ itemName }: { itemName: string }) {
  const [pokeDados, setPokeDados] = useState<pokemonDadosTypes>({
    name: '',
    cost: 0,
    effect: [],
    attributes: [],
    sprites: ''
  });
  const mountedRef = useRef(true);
  const pokemonEndPoint = 'https://pokeapi.co/api/v2/item';

  useEffect(() => {
    const pegaPokemon = async () => {
      const respostaAPI = await fetch(`${pokemonEndPoint}/${itemName}`);
      const objItem = await respostaAPI.json();

      console.log(objItem);
      const arrAttributes: string[] = objItem.attributes
        .map(({ name }: { name: string }) => name);

      const arrEffects: string[] = objItem.effect_entries
        .map(({ short_effect }: { short_effect: string }) => short_effect);

      const pokemonDados: pokemonDadosTypes = {
        name: objItem.name,
        cost: objItem.cost,
        effect: arrEffects,
        attributes: arrAttributes,
        sprites: objItem.sprites.default
      }
      setPokeDados(pokemonDados);

    };
    pegaPokemon();
    return () => { mountedRef.current = false }
  }, [itemName]);

  return (
    <>
      {pokeDados.name.length ? (
        <Card
          className={styles.pokeCard}
          style={{ width: "18rem" }}
        >
          <Card.Img
            variant="top"
            src={pokeDados.sprites}
          />
          <Card.Body>
            <Card.Title className={styles.cardTitle}>
              {pokeDados.name.toUpperCase()}
            </Card.Title>
            <Card.Text>
              <div>Custo: ${pokeDados.cost}</div>
              <div>Atributos:{
                pokeDados.attributes.length ?
                  pokeDados.attributes.map((atribute: string) => <span> {atribute} -</span>) :
                  <span> = Nenhum = </span>
              }</div>
              <div>Efeitos:{pokeDados.effect.map((effect: string) => <span> {effect}</span>)}</div>
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p><img className={styles.imgCarregando} src={placeholder} alt="Carregando" /></p>
      )
      }
    </>
  );
}

export default CardCatItens;
