import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home/Home';
import { Route, Switch, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Item from './components/Item/Item';
import Contest from './components/Contest/Contest';
import Games from './components/Games/Games';
import Evolution from './components/Evolution/Evolution';
import Location from './components/Location/Location';
import Berries from './components/Berry/Berries/Berries';
import Machine from './components/Machine/Machine';
import Move from './components/Move/Move';

function AppPokemon() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Berries">Berries</Nav.Link>
              <Nav.Link as={Link} to="/Contests">Contests</Nav.Link>
              <Nav.Link as={Link} to="/Evolution">Evolution</Nav.Link>
              <Nav.Link as={Link} to="/Games">Games</Nav.Link>
              <Nav.Link as={Link} to="/Locations">Locations</Nav.Link>
              <Nav.Link as={Link} to="/Machine">Machine</Nav.Link>
              <Nav.Link as={Link} to="/Moves">Moves</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Container >
          <Route exact path="/">
            <Home />
          </ Route>
          <Route exact path="/Berries">
            <Berries />
          </ Route>
          <Route exact path="/Contests">
            <Contest />
          </ Route>
          <Route exact path="/Evolution">
            <Evolution />
          </ Route>
          <Route exact path="/Games">
            <Games />
          </ Route>
          <Route exact path="/Item">
            <Item />
          </ Route>
          <Route exact path="/Locations">
            <Location />
          </ Route>
          <Route exact path="/Machine">
            <Machine />
          </ Route>
          <Route exact path="/Move">
            <Move />
          </ Route>
        </Container>
      </Switch>
    </div>

  )
}

export default AppPokemon;