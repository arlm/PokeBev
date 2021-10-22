import  { useState } from 'react'
import './App.css';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalScreen from './components/Machine/ModalMachine';
import { Button } from 'react-bootstrap';

function AppMachine() {
=======
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
>>>>>>> 779fd03d74211e744711b3ff020341eaa57521f7

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
<<<<<<< HEAD
      <div className='MachineButton'>
        <Button variant='secondary' onClick={() => setIsModalVisible(true)}> Machines </Button>
        {isModalVisible? <ModalScreen /> : null}
      </div>
=======
      <div className='LocationsButton'>
        <Button className='mt-4' variant='secondary' onClick={() => setIsModalVisible(true)}> Locations </Button>
        {isModalVisible? <ModalScreen  /> : null} 
      </div>
      <div className="Pokemon-List">
        {
          pokemons.length > 0 && pokemons.map((pokemon) => <Pokemon url={pokemon.url} name={pokemon.name}></Pokemon>) //se a primeira for falsa, para.
        }
      </div>
      
>>>>>>> 779fd03d74211e744711b3ff020341eaa57521f7
    </>
  );
}

<<<<<<< HEAD
export default AppMachine;

=======
export default AppPokemon;
>>>>>>> 779fd03d74211e744711b3ff020341eaa57521f7
