import { useEffect, useState } from "react";
import PokeLoagind from "../loading.gif";
import styles from "../Games.module.css";
import CardPokemon from "../../CardPokemon/CardPokemon";
import GamesCard from "../GamesCard/GamesCard";

function VersionGroup() {
  const [versionGroups, setVersionGroups] = useState<string[]>([]);
  const [pokemonsOfVersGroup, setPokemonsOfVersGroup] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filtroCor, setFiltroCor] = useState<string[]>([]);
  const VersionGroupEndPoint = 'https://pokeapi.co/api/v2/version-group';
  const allPokemonsEndPoint = 'https://pokeapi.co/api/v2/pokemon/?limit=1118&offset=0';

  useEffect(() => {
    const pegaVersoes = async () => {
      const respostaAPI = await fetch(VersionGroupEndPoint);
      const { results } = await respostaAPI.json();
      const ArrGenerations: string[] = results
        .map(({ name }: { name: string }) => name);
      Array.isArray(ArrGenerations) ?
        setVersionGroups(ArrGenerations) :
        setVersionGroups([]);
    };
    try {
      pegaVersoes();
    } catch (error) {
      console.log(error, 'Em VersionGroup.');
    }
  }, []);

  const getVersionGroup = async (nameVersionGroup: any) => {
    setLoading(true);
    try {
      const respostaAPI = await fetch(`${VersionGroupEndPoint}/${nameVersionGroup}`);
      const { versions } = await respostaAPI.json();
      const arrVersionsOfGroup: string[] = versions
        .map(({ name }: { name: string }) => name);
      Array.isArray(arrVersionsOfGroup) ?
        setFiltroCor(arrVersionsOfGroup) :
        setFiltroCor([]);
      const respostaAPIAllPokemons = await fetch(allPokemonsEndPoint);
      const { results } = await respostaAPIAllPokemons.json();
      const arrAllPokemons: string[] = results
        .map(({ name }: { name: string }) => name)
        .reverse();
      setPokemonsOfVersGroup(arrAllPokemons);
      setLoading(false);
    } catch (error) { }
  };

  return (
    <div className={styles.mainBox}>
      {versionGroups.length && !pokemonsOfVersGroup.length && !loading && (
        <GamesCard
          titulo='Grupos de Versões de Pokemons'
          geterFunc={getVersionGroup}
          arrayGames={versionGroups}
        />
      )}

      {loading && (
        <div className={styles.loading}>
          <img src={PokeLoagind} alt="Loading" />
          <h1>Carregando... </h1>
        </div>
      )}

      {pokemonsOfVersGroup.length && (
        <div className={styles.box}>
          <div onClick={() => setPokemonsOfVersGroup([])} className={styles.btnFechar}>X</div>
          {pokemonsOfVersGroup.map((pokemon: string) => (
            <CardPokemon key={'cardVG' + pokemon} pokeName={pokemon} filtro={filtroCor} />
          ))}
        </div>
      )}
    </div>
  );
}

export default VersionGroup;
