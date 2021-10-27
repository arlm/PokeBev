import { useEffect, useState } from "react"
import "./App.css"
import Pokemon from "./components/Pokemon/Pokemon"
import Evolution from "./components/Evolution/Evolution"
import "bootstrap/dist/css/bootstrap.min.css"
// import { BrowserRouter, Switch, Route } from "react-router-dom"
import Encounter from "./components/Encounter/Encounter"

type PokemonDataEvolution = {
  url: string
}

function AppPokemon() {
  const [evolution, setEvolution] = useState<PokemonDataEvolution[]>([])

  useEffect(() => {
    //faz a chamada, mas nao tem resposta
    fetch("https://pokeapi.co/api/v2/evolution-chain/?offset=100&limit=20")
      .then((response) => response.json()) //espera a resposta
      .then((data) => setEvolution(data.results)); //espera o json ficar pronto
  }, [])

  //realizar uma nova requisição para pegar os sprites(imagens direto da api)
  return (
    // <BrowserRouter>
    <>
      <Encounter></Encounter>
    <div className="Pokemon-List">
      {/* <Switch>
          <Route component={Encounter} path="/encounter" exact />
          <Route path="*">
          <h4>Página não encontrada</h4>
          </Route>
        </Switch> */}
      {
        evolution.length > 0 &&
        evolution.map((pokemon) => <Evolution url={pokemon.url}></Evolution>) //se a primeira for falsa, para.
      }´
    </div>
    </>
    // </BrowserRouter>
  )
}

export default AppPokemon
