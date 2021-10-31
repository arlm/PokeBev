import { useEffect, useState } from 'react';
import GamesCard from '../Games/GamesCard/GamesCard';
import PokeLoagind from '../Games/loading.gif';
import styles from '../Games/Games.module.css';
import CardCatItens from './CardCatItens/CardCatItens';

function Item() {
  const [categorias, setCategorias] = useState<string[]>([]);
  const [itensOfCat, setIgetItensOfCat] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const CatEndPoint = 'https://pokeapi.co/api/v2/item-category?offset=20&limit=45';
  const itensOfCatEndPoint = 'https://pokeapi.co/api/v2/item-category';

  useEffect(() => {
    const pegaCategorias = async () => {
      const respostaAPI = await fetch(CatEndPoint);
      const { results } = await respostaAPI.json();
      const ArrCategorias: string[] = results
        .map(({ name }: { name: string }) => name);
      Array.isArray(ArrCategorias) ?
        setCategorias(ArrCategorias) :
        setCategorias([]);
    }
    try {
      pegaCategorias();
    } catch (error) {
      console.log(error, 'Em Item.');
    }
  }, []);

  const getItensOfCat = async (nameCategoria: string) => {
    setLoading(true);
    try {
      const respostaAPI = await fetch(`${itensOfCatEndPoint}/${nameCategoria}`);
      const { items } = await respostaAPI.json();
      const ArrItens: string[] = items
        .map(({ name }: { name: string }) => name);
      Array.isArray(ArrItens) ?
        setIgetItensOfCat(ArrItens) :
        setIgetItensOfCat([]);
    } catch (error) {
      console.log(error, 'em Itens - getIntensOfCat');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.mainBox}>
      {categorias.length && !itensOfCat.length && !loading &&
        <GamesCard
          titulo='Categoria de Itens'
          geterFunc={getItensOfCat}
          arrayGames={categorias}
        />
      }

      {loading &&
        <div className={styles.loading}>
          <img src={PokeLoagind} alt='Loading' />
          <h1>Carregando... </h1>
        </div>
      }

      {itensOfCat.length &&
        <div className={styles.box}>
          <div onClick={() => setIgetItensOfCat([])} className={styles.btnFechar}>X</div>
          {itensOfCat.map((item: string) => (
            <CardCatItens key={'cardItem' + item} itemName={item} />
          ))}
        </div>
      }

    </main>
  )

}

export default Item;
