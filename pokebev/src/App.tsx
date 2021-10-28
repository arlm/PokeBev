import { useEffect, useState } from "react"
import "./App.css"
import Pokemon from "./components/Pokemon/Pokemon"
import "bootstrap/dist/css/bootstrap.min.css"
import Encounter from "./components/Encounter/Encounter"
import Evolution from "./components/Evolution/Evolution"

type PokemonDataEvolution = {
  url: string
}

function AppPokemon() {
  const [evolution, setEvolution] = useState<PokemonDataEvolution[]>([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/evolution-chain/?offset=100&limit=20")
      .then((response) => response.json()) 
      .then((data) => setEvolution(data.results));
  }, [])

  return (
    <>
      <Encounter></Encounter>
    <div className="Pokemon-List">
      {
        evolution.length > 0 &&
        evolution.map((pokemon) => <Evolution url={pokemon.url}></Evolution>)
      }
    </div>
    </>
  )
}

export default AppPokemon
