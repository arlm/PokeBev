import  {useEffect, useState} from 'react'
import './App.css';
import Pokemon from './components/Pokemon/Pokemon';

type PokemonData = {
 
  name: string,
  url: string
}

function AppPokemon() {

  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  useEffect(() => { //faz a chamada, mas nao tem resposta
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    .then((response) => response.json()) //espera a resposta
    .then((data) => setPokemons(data.results)); //espera o json ficar pronto
  }, []);



  return (
    <div className="Pokemon-List">
      {
        pokemons.length > 0 && pokemons.map((pokemon) => <Pokemon url={pokemon.url} name={pokemon.name}></Pokemon>) //se a primeira for falsa, para.
      }
    </div>
  )
}

export default AppPokemon;

