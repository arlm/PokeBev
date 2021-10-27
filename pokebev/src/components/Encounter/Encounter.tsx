import styles from "./Encounter.module.css"
import { useEffect, useState } from "react"

interface EncounterType {
  name: any
  id: any
}

function Encounter() {
  const [name, setName] = useState<any>("")
  // const [id, setId] = useState<any>("")
  const [lista, setLista] = useState<any>([])
  const [encounter, setEncounter] = useState<EncounterType[]>([])

  useEffect(() => {
    const pegaEncounters = async () => {
      const resposta = await fetch(
        "https://pokeapi.co/api/v2/encounter-method/"
      )
      const objtEncounters = await resposta.json()
      setLista(objtEncounters.results)
    }
    pegaEncounters()
  }, [])

  useEffect(() => {
    mostrarEncounters()
  },[])

  const mostrarEncounters = async () => {
    console.log(name)

    try {
      if (name.length > 0 || name) {
        const resposta = await fetch(
          `https://pokeapi.co/api/v2/encounter-method/${name}`
        )
        const EncounterDetails = await resposta.json()
        console.log(EncounterDetails)
        // setEncounter(EncounterDetails.results)
      }
    } catch (error) {
      alert("Espaço vazio")
    }
  }

  return (
    <div className={styles.Encounter} data-testid="Encounter">
      <div>
        {encounter && (
          <>
            <h3> Lista de encounters: </h3>
            <input
              placeholder="Escolha um encounter."
              list="pokemon"
              required
              minLength={1}
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <datalist id="pokemon">
              {Object.keys(lista).length > 0 &&
                lista.map((s: any) => <option value={s.name} key={s.name} />)}
            </datalist>
            <button onClick={mostrarEncounters}>GO</button>
            {/* <span>{encounter}</span> */}
          </>
        )}
      </div>
    </div>
  )
}

export default Encounter
