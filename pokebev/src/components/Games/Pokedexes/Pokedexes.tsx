import { useEffect, useState } from 'react';
import PokeLoagind from '../loading.gif';
import styles from '../Games.module.css';
import CardPokemon from '../../CardPokemon/CardPokemon';
import GamesCard from '../GamesCard/GamesCard';

function Pokedexes() {
  const [pokedexes, setPokedexes] = useState<string[]>([]);
  const [pokedex, setPokedex] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const endPointPokedexex = 'https://pokeapi.co/api/v2/pokedex';

  useEffect(() => {
    const pegaPokedexes = async () => {
      const respostaAPI = await fetch(endPointPokedexex);
      const { results } = await respostaAPI.json();
      const ArrPokedexes: string[] = results.map(({ name }: { name: string }) => name);
      Array.isArray(ArrPokedexes) ? setPokedexes(ArrPokedexes) : setPokedexes([]);
    }
    try {
      pegaPokedexes();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getPokedex = async (namePokedex: string) => {
    setLoading(true);
    try {
      const respostaAPI = await fetch(`${endPointPokedexex}/${namePokedex}`);
      const { pokemon_entries } = await respostaAPI.json();
      const ArrPokemons: string[] = pokemon_entries
        .map(({ pokemon_species: { name } }: { pokemon_species: { name: string } }) => name);
      Array.isArray(ArrPokemons) ? setPokedex(ArrPokemons) : setPokedex([]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.mainBox}>
      {pokedexes.length && !pokedex.length && !loading && (
        <GamesCard
          titulo='Pokedex'
          geterFunc={getPokedex}
          arrayGames={pokedexes}
        />
      )}

      {loading && (
        <div className={styles.loading}>
          <img src={PokeLoagind} alt='Loading' />
          <h1>Carregando... </h1>
        </div>
      )}

      {pokedex.length && (
        <div className={styles.box}>
          <div onClick={() => setPokedex([])} className={styles.btnFechar}>X</div>
          {pokedex.map((pokemon: string) => (
            <CardPokemon key={'cardPok' + pokemon} pokeName={pokemon} filtro={[]} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Pokedexes
