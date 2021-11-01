import { useEffect, useState } from "react"
import Encounter from "../Encounter/Encounter"
import Evolution from "../Evolution/Evolution"
import React from "react"
import styles from "./EvolutionChains.module.css"

type PokemonDataEvolution = {
  url: string
}

const EvolutionChains = () => {
  const [evolution, setEvolution] = useState<PokemonDataEvolution[]>([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/evolution-chain/?offset=1&limit=20")
      .then((response) => response.json())
      .then((data) => setEvolution(data.results))
  }, [])

  return (
    <>
      <div className={styles.PokemonList}>
        {evolution.length > 0 &&
          evolution.map((pokemon) => <Evolution url={pokemon.url}></Evolution>)}
      </div>
    </>
  )
}

export default EvolutionChains
