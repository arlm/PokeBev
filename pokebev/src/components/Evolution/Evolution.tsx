import styles from "./Evolution.module.css"
import { useEffect, useState } from "react"
import EvolutionCard from "../EvolutionCard/EvolutionCard"
import Encounter from "../Encounter/Encounter"
import { Alert } from "react-bootstrap"

type PokemonDataEvolution = {
  url: string
}

function splitUrl(url: string) {
  return url.substring(url.indexOf("cies") + 5).split("/")[0]
}
function Evolution(params: PokemonDataEvolution) {
  const [evolucao, setEvolucao] = useState<any>(undefined)
  const [openModal, setOpenModal] = useState<boolean>(false)

  useEffect(() => {
    fetch(params.url)
      .then((response) => response.json())
      .then((data) => setEvolucao(data))
  }, [])

  if (!evolucao) {
    return <div>Aguarde</div>
  } else {
    const metaBaseUrl =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
    const pokeBaseUrl = evolucao.chain.species.url
    const metaEvolutionUrl =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    var urlAlt = evolucao.chain.evolves_to[0]?.species.url //Estou pegando a evolução do meu pokemon

    const srcBaseImg = metaBaseUrl + splitUrl(pokeBaseUrl) + ".png"

    const pokeNameBase = evolucao.chain.species.name
    const chainSecound = evolucao.chain.evolves_to[0]?.evolves_to[0]
    const pokeNameSecound =
      evolucao.chain.evolves_to[0]?.evolves_to[0]?.species.name
    const pokeNameFirst = evolucao.chain.evolves_to[0]?.species.name

    let evolution2 = []
    if (chainSecound) {
      evolution2.push(pokeNameSecound)
    }

    const srcEvolutionImg = urlAlt
      ? metaEvolutionUrl + splitUrl(urlAlt) + ".png"
      : undefined

    if (!chainSecound) {
      return (
        <div>
          <div>
            <div className={styles.Evolution} data-testid="Evolution">
              <img
                onClick={() => setOpenModal(!openModal)}
                className={styles.PokemonBase}
                alt={pokeNameBase}
                src={srcBaseImg}
              />
              <h3 className={styles.uppercase}>{pokeNameBase}</h3>
              {openModal && (
                <EvolutionCard
                  pokeFirst={pokeNameFirst}
                  showModal
                  pokeName={pokeNameBase}
                  objetoEvolucao={evolucao}
                />
              )}
              <img
                className={styles.PokemonMini}
                alt={pokeNameFirst}
                src={srcEvolutionImg}
              />
              <p className={styles.capitalize}>{pokeNameFirst}</p>

              <p className={styles.capitalize}>{evolution2}</p>
            </div>
          </div>
        </div>
      )
    } else {
      var urlAlt2 = evolucao.chain.evolves_to[0]?.evolves_to[0]?.species.url

      const pokeEvolutionUrl2 = urlAlt2 ? splitUrl(urlAlt2) + ".png" : undefined
      const srcEvolutionImg2 = metaEvolutionUrl + pokeEvolutionUrl2

      return (
        <div>
          <div>
            <div className={styles.Evolution} data-testid="Evolution">
              <img
                onClick={() => setOpenModal(!openModal)}
                className={styles.PokemonBase}
                alt={pokeNameBase}
                src={srcBaseImg}        
              />
              <h3 className={styles.uppercase}>{pokeNameBase}</h3>
              {openModal && (
                <EvolutionCard
                  showModal
                  pokeFirst={pokeNameFirst}
                  pokeName={pokeNameBase}
                  objetoEvolucao={evolucao}
                />
              )}
              <img
                className={styles.PokemonMini}
                alt={pokeNameFirst}
                src={srcEvolutionImg}
              />
              <p className={styles.capitalize}>{pokeNameFirst}</p>
              <img
                className={styles.PokemonMini}
                alt={pokeNameSecound}
                src={srcEvolutionImg2}
              />
              <p className={styles.capitalize}>{evolution2}</p>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Evolution
