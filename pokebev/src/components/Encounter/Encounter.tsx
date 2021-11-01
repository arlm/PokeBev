import styles from "./Encounter.module.css"
import { useEffect, useState } from "react"
import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  FormControl,
  Row,
} from "react-bootstrap"

interface EncounterType {
  name: any
}

function Encounter() {
  const [encounterList, setListEncounters] = useState<EncounterType[]>([])
  const [encounterDetails, setEncountersDetails] = useState<any[]>([])
  const [namePokemon, setNamePokemon] = useState<string>("")
  const [erro, setErro] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErro(false)
    }, 1500)

    return () => {
      clearTimeout(timeout)
    }
  }, [erro])

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
        `https://pokeapi.co/api/v2/pokemon/${namePokemon.toLowerCase()}/encounters`
      )
      const encounterDetailsObj = await resposta.json()
      console.log(encounterDetails)

      setEncountersDetails(encounterDetailsObj)

      if (encounterDetailsObj.length == 0) {
        setErro(true)
        setNamePokemon("")
        return
      }

      setNamePokemon("")
    } catch (error) {
      setErro(true)
      setNamePokemon("")
    }
  }

  return (
    <div className={styles.Encounter} data-testid="Encounter">
      <section className={styles.cardMethods}>
        {encounterList && (
          <>
            <h3> Todos os métodos de encontro </h3>
            <Row xs={6} md={4} className="g-4">
              {encounterList.map((enc) => (
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title className={styles.capitalize}>
                        {enc.name}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}
      </section>
      <section className={styles.localPokemon}>
        <h2>Onde encontrar este Pokémon?</h2>
        <Form className="d-flex mb-2">
          <FormControl
            type="search"
            placeholder="Digite o nome do Pokémon"
            className="me-2"
            aria-label="Pesquisar"
            onChange={(e) => setNamePokemon(e.target.value)}
          />
          <Button
            variant="outline-success"
            onClick={() => showEncounterPokemon(namePokemon)}
          >
            GO
          </Button>
        </Form>
        {erro && (
          <Alert variant="danger">
            Ops, parece que não sabemos como encontrar este pokémon.
          </Alert>
        )}
        {!erro && (
          <div className={styles.list}>
            {encounterDetails.map((item: any) => (
              <div className={styles.cardbox}>
                <h3 className={styles.capitalize} key={item.location_area.name}>
                  {item.location_area.name.replace(/[-]/g, " ")}
                </h3>
                <div>
                  <h4>Métodos</h4>
                  <p className={styles.capitalize}>
                    {item.version_details[0].encounter_details[0]?.method?.name.replace(
                      /[-]/g,
                      " "
                    )}
                  </p>
                  <p className={styles.capitalize}>
                    {item.version_details[0].encounter_details[1]?.method?.name.replace(
                      /[-]/g,
                      " "
                    )}
                  </p>
                </div>
                <div>
                  <h4>Condições</h4>
                  <p className={styles.capitalize}>
                    {item.version_details[0].encounter_details[1]?.condition_values[0]?.name.replace(
                      /[-]/g,
                      " "
                    )}
                  </p>
                  <p className={styles.capitalize}>
                    {item.version_details[0].encounter_details[0]?.condition_values[0]?.name.replace(
                      /[-]/g,
                      " "
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Encounter
