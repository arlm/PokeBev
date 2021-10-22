import  {useEffect, useState} from 'react'
import './App.css';
import Pokemon from './components/Pokemon/Pokemon';
import ModalScreen from './Modal';
import { Button } from 'react-bootstrap';

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

  const [isModalVisible, setIsModalVisible] = useState(false);


  return (
    <>
      <div className='LocationsButton'>
        <Button className='mt-4' variant='secondary' onClick={() => setIsModalVisible(true)}> Locations </Button>
        {isModalVisible? <ModalScreen  /> : null} 
      </div>
      <div className="Pokemon-List">
        {
          pokemons.length > 0 && pokemons.map((pokemon) => <Pokemon url={pokemon.url} name={pokemon.name}></Pokemon>) //se a primeira for falsa, para.
        }
      </div>
      
    </>
  );
}

export default AppPokemon;