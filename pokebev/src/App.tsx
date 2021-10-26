import './App.css';
import Games from './components/Games/Generation/Games';
import Pokedexes from './components/Games/Pokedexes/Pokedexes';
import Version from './components/Games/Version/Version';
import VersionGroup from './components/Games/VersionGroup/VersionGroup';

function AppPokemon() {
  return (
    <div >
      <Games />
      <Pokedexes />
      <Version />
    </div>
  )
}

export default AppPokemon;

