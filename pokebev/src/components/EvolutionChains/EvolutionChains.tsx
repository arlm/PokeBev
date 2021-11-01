import axios from "axios"
import { useEffect, useState } from "react"
import Evolution from "../Evolution/Evolution"
import styles from "./EvolutionChains.module.css"

type PokemonDataEvolution = {
  url: string
}

const EvolutionChains = () => {
  const [evolution, setEvolution] = useState<PokemonDataEvolution[]>([])
  const [page, setPage] = useState(25)
  const [offset, setOffset] = useState(1)
  const [isFetching, setIsFetching] = useState(false)

  const loadData = () => {
    axios
      .get("https://pokeapi.co/api/v2/evolution-chain/?offset=1&limit=897")
      .then((res) => {
        setEvolution(res.data.results)
      })
  }

  // const moreData = () => {
  //   let url = `https://pokeapi.co/api/v2/evolution-chain/?limit=50`
  //   axios.get(url).then((res) => {
  //     setEvolution([...evolution, ...res.data.results])
  //     console.log(page)
  //     setPage(page + 25)
  //     // setOffset(page)
  //     setIsFetching(false)
  //   })
  // }

  // const isScrolling = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //     document.documentElement.offsetHeight
  //   ) {
  //     return
  //   }
  //   setIsFetching(true)
  // }

  useEffect(() => {
    loadData()
    // window.addEventListener("scroll", isScrolling)
    // return () => window.removeEventListener("scroll", isScrolling)
  }, [])

  // useEffect(() => {
  //   if (isFetching) {
  //     moreData()
  //   }
  // }, [isFetching])

  if (!evolution) {
    return <div>Loading...</div>
  }
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
