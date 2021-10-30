import { useEffect, useState } from "react";
import PokeLoagind from "../loading.gif";
import styles from "../Games.module.css";
import { Figure } from "react-bootstrap";
import GamesCard from "../GamesCard/GamesCard";
import CardPokemon from "../../CardPokemon/CardPokemon";

function Version() {
  const [versionsNames, setVersionsNames] = useState<string[]>([]);
  const [pokemonsOfVersion, setPokemonsOfVersion] = useState<string[]>([]);
  const [filtroCor, setFiltroCor] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [naoTem, setNaoTem] = useState<boolean>(false);
  const versionsEndPoint = 'https://pokeapi.co/api/v2/version';
  const allPokemonsEndPoint = 'https://pokeapi.co/api/v2/pokemon/?limit=1118&offset=0';

  useEffect(() => {
    const pegaVersoes = async () => {
      const respostaAPI = await fetch(versionsEndPoint);
      const { results } = await respostaAPI.json();
      const arrVersionsNames: string[] = results.map(({ name }: { name: string }) => name);
      Array.isArray(arrVersionsNames) ?
        setVersionsNames(arrVersionsNames) :
        setVersionsNames([]);
    };
    try {
      pegaVersoes();
    } catch (error) {
      console.log(error, 'Em Versions.');
    }
  }, []);

  const getVersion = async (nameVersion: string) => {
    if (nameVersion === "colosseum" || nameVersion === "xd") {
      setNaoTem(true);
      setPokemonsOfVersion([]);
      return;
    }
    setLoading(true);
    setFiltroCor([nameVersion]);
    try {
      const respostaAPI = await fetch(allPokemonsEndPoint);
      const { results } = await respostaAPI.json();
      const ArrPokemons: string[] = results
        .map(({ name }: { name: string }) => name)
        .reverse();
      setPokemonsOfVersion(ArrPokemons);
      setLoading(false);
    } catch (error) {
      console.log(error, 'Em Version getVersion.');
    }
  };

  return (
    <div className={styles.mainBox}>
      {versionsNames.length && !pokemonsOfVersion.length && !loading && (
        <GamesCard
          titulo='Versão dos Pokemons'
          geterFunc={getVersion}
          arrayGames={versionsNames}
        />
      )}

      {loading && (
        <div className={styles.loading}>
          <img src={PokeLoagind} alt="Loading" />
          <h1>Carregando... </h1>
        </div>
      )}

      {pokemonsOfVersion.length && (
        <div className={styles.box}>
          <div onClick={() => setPokemonsOfVersion([])} className={styles.btnFechar}>X</div>
          {pokemonsOfVersion.map((pokemon: string) => (
            <CardPokemon key={'cardV' + pokemon} pokeName={pokemon} filtro={filtroCor} />
          ))}
        </div>
      )}

      {naoTem && (
        <div className='justify-content-center d-flex' onClick={() => { setNaoTem(false); setPokemonsOfVersion([]) }}>
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
