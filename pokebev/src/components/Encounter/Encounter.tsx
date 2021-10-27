import styles from "./Encounter.module.css"
import { useEffect, useState } from "react"

interface EncounterType {
  name: any
}

function Encounter() {
  const [encounterList, setListEncounters] = useState<EncounterType[]>([])
  const [encounterDetails, setEncountersDetails] = useState<any[]>([])
  const [namePokemon, setNamePokemon] = useState<string>("")

  useEffect(() => {
    const showEncounters = async () => {
      const resposta = await fetch(
        "https://pokeapi.co/api/v2/encounter-method/"
      )
      const objtEncounters = await resposta.json()
      setListEncounters(objtEncounters.results)
      // console.log(encounterList)
    }
    showEncounters()
  }, [])

  useEffect(() => {
    showEncounterPokemon(namePokemon)
  }, [])

  async function showEncounterPokemon(namePokemon: string) {
    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${namePokemon}/encounters`
      )
      const encounterDetailsObj = await resposta.json()
      console.log(encounterDetailsObj)
      setEncountersDetails(encounterDetailsObj)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.Encounter} data-testid="Encounter">
      <div>
        {encounterList && (
          <>
            <h3> Lista de encounters: </h3>
            <ul>
              {encounterList.map((enc) => (
                <li>{enc.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div>
        <h3>Onde encontrar este pokémon?</h3>
        <input
          placeholder="Digite nome do Pokemon"
          required
          minLength={1}
          value={namePokemon}
          onChange={(e) => setNamePokemon(e.target.value)}
        />
        <button onClick={() => showEncounterPokemon(namePokemon)}>GO</button>
        {encounterDetails.length > 0 && (
          <div>
            <ul>
              <li>{encounterDetails[0].location_area.name}</li>
              <li>{encounterDetails[1].location_area.name}</li>
              <li>{encounterDetails[2].location_area.name}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Encounter
