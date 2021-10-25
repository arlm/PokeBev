import styles from "./Evolution.module.css"
import { useEffect, useState } from "react"

type PokemonDataEvolution = {
  url: string
}

function Evolution(params: PokemonDataEvolution) {
  const [evolucao, setEvolucao] = useState<any>(undefined)

  useEffect(() => {
    fetch(params.url)
      .then((response) => response.json())
      .then((data) => setEvolucao(data))
  }, [])

  if (!evolucao) {
    return <div>Aguarde</div>
  } else {
    const metaBaseUrl =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
    const pokeBaseUrl = evolucao.chain.species.url
    const metaEvolutionUrl =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    var urlAlt = evolucao.chain.evolves_to[0].species.url //Estou pegando a evolução do meu pokemon

    let evolutionBaseId = pokeBaseUrl
      .substring(pokeBaseUrl.indexOf("cies") + 5)
      .split("/")[0]

    const srcBaseImg = metaBaseUrl + evolutionBaseId + ".svg"
    
    let trigger = evolucao.chain.evolves_to[0].evolution_details[0].trigger.name
    let minLevel = `Nível: ${evolucao.chain.evolves_to[0].evolution_details[0].min_level}`
    let min_happiness= `Felicidade ${evolucao.chain.evolves_to[0].evolution_details[0].min_happiness}`

    let evolution2 = []
    if (!evolucao.chain.evolves_to[0].evolves_to[0]) {
      evolution2.push("não há mais evoluções")
    } else {
      evolution2.push(evolucao.chain.evolves_to[0].evolves_to[0].species.name)
    }

    let minLevel2 =
     `Nível: ${evolucao.chain.evolves_to[0].evolves_to[0]?.evolution_details[0].min_level}`
    let trigger2 =
      evolucao.chain.evolves_to[0].evolves_to[0]?.evolution_details[0].trigger
        .name

    const pokeEvolutionUrl =
      urlAlt.substring(urlAlt.indexOf("cies") + 5).split("/")[0] + ".png"
    const srcEvolutionImg = metaEvolutionUrl + pokeEvolutionUrl
    // console.log(srcEvolutionImg)

    if (!evolucao.chain.evolves_to[0].evolves_to[0]) {
      return (
        <div className={styles.Evolution} data-testid="Evolution">
          <img
            className={styles.PokemonBase}
            alt={evolucao.chain.species.name}
            src={srcBaseImg}
          />
          <h3>{evolucao.chain.species.name}</h3>
          <img
            className={styles.PokemonMini}
            alt={evolucao.chain.evolves_to[0].species.name}
            src={srcEvolutionImg}
          />
          <span>{minLevel}</span>
          <span>Trigger: {trigger}</span>
          <p>{evolucao.chain.evolves_to[0].species.name}</p>

          <p>{evolution2}</p>
        </div>
      )
    } else {
      var urlAlt2 = evolucao.chain.evolves_to[0].evolves_to[0].species.url

      let lastEvolution = urlAlt2
        .substring(urlAlt2.indexOf("cies") + 5)
        .split("/")[0]

      const pokeEvolutionUrl2 = lastEvolution + ".png"
      const srcEvolutionImg2 = metaEvolutionUrl + pokeEvolutionUrl2

      return (
        <div className={styles.Evolution} data-testid="Evolution">
          <img
            className={styles.PokemonBase}
            alt={evolucao.chain.species.name}
            src={srcBaseImg}
          />
          <h3>{evolucao.chain.species.name}</h3>
          <span>{minLevel}</span>
          <span>Trigger: {trigger}</span>
          <img
            className={styles.PokemonMini}
            alt={evolucao.chain.evolves_to[0].species.name}
            src={srcEvolutionImg}
          />
          <span>{minLevel2}</span>
          <span>Trigger: {trigger2}</span>
          <p>{evolucao.chain.evolves_to[0].species.name}</p>
          <img
            className={styles.PokemonMini}
            alt={evolucao.chain.evolves_to[0].evolves_to[0].species.name}
            src={srcEvolutionImg2}
          />
          <p>{evolution2}</p>
        </div>
      )
    }
  }
}
// const Evolution = (params: PokemonDataEvolution) => (

//   <div className={styles.Evolution} data-testid="Evolution">
//     Evolution Component
//   </div>
// );

export default Evolution
