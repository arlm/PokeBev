import  {useEffect, useState} from 'react'
import './App.css';
import Pokemon from './components/Pokemon/Pokemon';
import Evolution from './components/Evolution/Evolution';
import "bootstrap/dist/css/bootstrap.min.css";


type PokemonDataEvolution = {
  url: string
}

function AppPokemon() {
  const [evolution, setEvolution] = useState<PokemonDataEvolution[]>([]);

  useEffect(() => { //faz a chamada, mas nao tem resposta
    fetch('https://pokeapi.co/api/v2/evolution-chain/')
    .then((response) => response.json()) //espera a resposta
    .then((data) => setEvolution(data.results)); //espera o json ficar pronto
  }, []);

  //realizar uma nova requisição para pegar os sprites(imagens direto da api)
  return (
    
    <div className="Pokemon-List">
      {
        evolution.length > 0 && evolution.map((pokemon) => <Evolution url={pokemon.url}></Evolution>) //se a primeira for falsa, para.
      }
      
      
    </div>
  )
}


export default AppPokemon;

