import styles from "./Encounter.module.css"
import { useEffect, useState } from "react"

interface EncounterType {
  name: any
}

function Encounter() {
  // const [name, setName] = useState<any>("")
  // const [lista, setLista] = useState<any>([])
  const [encounter, setEncounter] = useState<EncounterType[]>([])

  useEffect(() => {
    const pegaEncounters = async () => {
      const resposta = await fetch(
        "https://pokeapi.co/api/v2/encounter-method/"
      )
      const objtEncounters = await resposta.json()
      setEncounter(objtEncounters.results)
    }
    pegaEncounters()
  }, [])

 
  return (
    <div className={styles.Encounter} data-testid="Encounter">
      <div>
        {encounter && (
          <>
            <h3> Lista de encounters: </h3>
            {encounter.map((enc) => (
              <p>{enc.name}</p>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Encounter
