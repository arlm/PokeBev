import './App.css';
import Games from './components/Games/Games';


type PokemonData = {
  name: string,
  url: string
}

function AppPokemon() {
  return (
    <div>
      <Games />
    </div>
  )
}

export default AppPokemon;

