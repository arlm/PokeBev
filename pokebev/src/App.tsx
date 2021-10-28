import  {useEffect, useState} from 'react'
import Berry from  './components/Berry/Berry';
import { BerryData } from './components/Models/interfaces';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Contests from './components/Contest/Contest';
import './App.css';
import Home from './components/Home/Home';
import { Route, Switch, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Pokemon from './components/Pokemon/Pokemon';
import Item from './components/Item/Item';
import Contest from './components/Contest/Contest';
import Game from './components/Game/Game';
import Evolution from './components/Evolution/Evolution';
import Location from './components/Location/Location';



function AppPokemon() {


  //berries
  const [berries, setBerries] = useState<BerryData[]>([]);


  useEffect(() => { //faz a chamada, mas nao tem resposta
    fetch('https://pokeapi.co/api/v2/berry?limit=8000')
    .then((response) => response.json()) //espera a resposta
    .then((data) => setBerries(data.results)); //espera o json ficar pronto
  }, []);

  

  // //contests
  // const [contests, setContests] = useState<PokemonData[]>([]);
  // useEffect(() => { //faz a chamada, mas nao tem resposta
  //   fetch('https://pokeapi.co/api/v2/contests?limit=3')
  //   .then((response) => response.json()) //espera a resposta
  //   .then((data) => setContests(data.results)); //espera o json ficar pronto
  // }, []);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Item">Item</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        
      <Switch>
        <Container >
          <Route exact path="/">
            <Home />
          </ Route>

          {/* <Route exact path="/Pokemon">
            <Pokemon />
          </ Route> */}

          <Route exact path="/Item">
            <Item />
          </ Route>

          <Route exact path="/Contests">
            <Contest />
          </ Route>

          <Route exact path="/Games">
            <Game />
          </ Route>

          {/* <Route exact path="/Berry">
            <Berry />
          </ Route> */}

          <Route exact path="/Evolution">
            <Evolution />
          </ Route>

          <Route exact path="/Locations">
            <Location />
          </ Route>
        </Container>
      </Switch>
    </div>
        
  )
}

export default AppPokemon;

