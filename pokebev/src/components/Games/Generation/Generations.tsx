import { useEffect, useState } from 'react';
import GamesCard from '../GamesCard/GamesCard';
import PokeLoagind from '../loading.gif';
import styles from "../Games.module.css";
import CardPokemon from '../../CardPokemon/CardPokemon';

function Games() {
  const [generations, setGenerations] = useState<string[]>([]);
  const [pokemonsOfGeneration, setPokemonsOfGeneration] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const endPointGenerations = 'https://pokeapi.co/api/v2/generation';

  useEffect(() => {
    const pegaGeracoes = async () => {
      const respostaAPI = await fetch(endPointGenerations);
      const { results } = await respostaAPI.json();
      const ArrGenerations: string[] = results
        .map(({ name }: { name: string }) => name);
      Array.isArray(ArrGenerations) ?
        setGenerations(ArrGenerations) :
        setGenerations([]);
    }
    try {
      pegaGeracoes();
    } catch (error) {
      console.log(error, 'Em Generations.');
    }
  }, []);

  const getGeneration = async (nameGeneration: string) => {
    setLoading(true);
    try {
      const respostaAPI = await fetch(`${endPointGenerations}/${nameGeneration}`);
      const { pokemon_species } = await respostaAPI.json();
      const ArrPokemons: string[] = pokemon_species.map(({ name }: { name: string }) => name);
      Array.isArray(ArrPokemons) ?
        setPokemonsOfGeneration(ArrPokemons) :
        setPokemonsOfGeneration([]);
    } catch (error) {
      console.log(error, 'em Generetions - getGeneration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.mainBox}>
      {generations.length && !pokemonsOfGeneration.length && !loading &&
        <GamesCard
          titulo='Gerações dos Pokemons'
          geterFunc={getGeneration}
          arrayGames={generations}
        />
      }

      {loading &&
        <div className={styles.loading}>
          <img src={PokeLoagind} alt='Loading' />
          <h1>Carregando... </h1>
        </div>
      }

      {pokemonsOfGeneration.length &&
        <div className={styles.box}>
          <div onClick={() => setPokemonsOfGeneration([])} className={styles.btnFechar}>X</div>
          {pokemonsOfGeneration.map((pokemon: string) => (
            <CardPokemon key={'cardGen' + pokemon} pokeName={pokemon} filtro={[]} />
          ))}
        </div>
      }
    </main>
  );
}

export default Games;
