import styles from "./Encounter.module.css"
import { useEffect, useState } from "react"
import { listenerCount } from "process"

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
      //console.log(encounterList)
    }
    showEncounters()
  }, [])

  useEffect(() => {
    showEncounterPokemon(namePokemon)
  }, [])

  async function showEncounterPokemon(namePokemon: string) {
    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${namePokemon.toLowerCase()}/encounters`,
        
      );
      const encounterDetailsObj = await resposta.json()
       console.log(encounterDetailsObj[0].version_details[0].encounter_details[0].condition_values[0].name)
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
            <h3> Lista de Encounters: </h3>
            <ul>
              {encounterList.map((enc) => (
                <li>{enc.name.charAt(0).toUpperCase() + enc.name.slice(1)}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div>
        <h3>Onde encontrar este Pokémon?</h3>
        <input
          placeholder="Digite o nome do Pokémon"
          required
          minLength={1}
          value={namePokemon}
          onChange={(e) => setNamePokemon(e.target.value)}
        />
        <button onClick={() => showEncounterPokemon(namePokemon)}>GO</button>
        {encounterDetails.length > 0 && (
          <div>
            
              <div className={styles.list}>
                {encounterDetails.map((item: any) => (
                  <div className="card">
                    <p key={item.location_area.name}>
                      {item.location_area.name.charAt(0).toUpperCase() +
                        item.location_area.name.slice(1).replace(/[-]/g, " ")}
                    </p>

                    <span>
                      método - 
                      {
                        item.version_details[0].encounter_details[0]?.method
                          ?.name
                      }
                      : condição -
                      {
                        item.version_details[0].encounter_details[0]
                          ?.condition_values[0]?.name
                      }
                    </span>
                    <span>
                     
                      {
                        item.version_details[0].encounter_details[1]?.method
                          ?.name
                      }
                      :
                      {
                        item.version_details[0].encounter_details[1]
                          ?.condition_values[0]?.name
                      }
                    </span>
                  </div>
                ))}
              </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Encounter
