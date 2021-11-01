import { useEffect, useState } from "react"
import Evolution from "../Evolution/Evolution"
import styles from "./EvolutionChains.module.css"
import loadingSquirtle from "./loadingSquirtle.gif"

type PokemonDataEvolution = {
  url: string
}

const EvolutionChains = () => {
  const [evolution, setEvolution] = useState<PokemonDataEvolution[]>([])
  const [loading, setLoading] = useState<any>(false)

  
  const loadData = () => {
    fetch("https://pokeapi.co/api/v2/evolution-chain/?offset=1&limit=897")
    .then((response) => response.json())
    .then((data) => setEvolution(data.results))
    .finally(() => {setTimeout(() => {setLoading(false)}, 3500)})
  }
  
  useEffect(() => {
    setLoading(true)
    loadData()
    
  }, [])

  return (
    <>
      {!loading &&(<div className={styles.PokemonList}>
        {evolution.length > 0 &&
          evolution.map((pokemon) => <Evolution url={pokemon.url}></Evolution>)}
      </div>)}
      {loading && (
        <div className={styles.loading}>
          <img src={loadingSquirtle} alt="Loading" />
          <h1>Carregando... </h1>
        </div>
      )}
    </>
  )
}

export default EvolutionChains
