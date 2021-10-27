import  {useEffect, useState} from 'react'
import Berry from  './components/Berry/Berry';
import { BerryData } from './components/Models/interfaces';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Contests from './components/Contest/Contest';
import './App.css';

function AppPokemon() {


  //berries
  const [berries, setBerries] = useState<BerryData[]>([]);


  useEffect(() => { //faz a chamada, mas nao tem resposta
    fetch('https://pokeapi.co/api/v2/berry?limit=8000')
    .then((response) => response.json()) //espera a resposta
    .then((data) => setBerries(data.results)); //espera o json ficar pronto
  }, []);

  

  // //contests
  // const [contests, setContests] = useState<PokemonData[]>([]);
  // useEffect(() => { //faz a chamada, mas nao tem resposta
  //   fetch('https://pokeapi.co/api/v2/contests?limit=3')
  //   .then((response) => response.json()) //espera a resposta
  //   .then((data) => setContests(data.results)); //espera o json ficar pronto
  // }, []);

  return (
    
    <div>
      <h1>Berry</h1>
      <div className="Berries-List">
        {
          berries.length > 0 && berries.map((berry) => <Berry url={berry.url} name={berry.name}  ></Berry>) //se a primeira for falsa, para.
        }
      </div>

      {/* <div className="Contests-List">
        {
          contests.length > 0 && pokemons.map((pokemon) => <Contests url={pokemon.url} name={pokemon.name} ></Contests>) //se a primeira for falsa, para.
        }
      </div> */}
    </div>
    
  )
}

export default AppPokemon;

