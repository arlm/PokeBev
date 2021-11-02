import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './components/Home/Home';
import { Route, Switch, Link } from 'react-router-dom';
import { Navbar, Container, Nav, Modal, ModalTitle, ModalBody } from 'react-bootstrap';
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import Item from './components/Item/Item';
import Contest from './components/Contest/Contest';
import Games from './components/Games/Games';
import EvolutionChains from './components/EvolutionChains/EvolutionChains';
import Location from './components/Location/Location';
import Berries from './components/Berry/Berries/Berries';
import Machine from './components/Machine/Machine';
import GroupDetails from './components/GroupDetails/GroupDetails';
import { useState } from "react";
import Pokebola from './components/Location/pokebola.gif';
import styles from './components/Location/Location.module.css';
import Encounter from './components/Encounter/Encounter';
import Battle from './components/Battle/Battle';
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

function AppPokemon() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">PokeBev</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Berries">Berries</Nav.Link>
              <Nav.Link as={Link} to="/Evolution">Evolution</Nav.Link>
              <Nav.Link as={Link} to="/Encounter">Encounter</Nav.Link>
              <Nav.Link as={Link} to="/Games">Games</Nav.Link>
              <Nav.Link as={Link} to="/Item">Itens</Nav.Link>
              <Nav.Link as={Link} to="#" onClick={() => setShow(true)}>Locations</Nav.Link>
              <Nav.Link as={Link} to="/Machine">Machine</Nav.Link>
              <Nav.Link as={Link} to="/Battle">Battle</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <ModalHeader closeButton>
          <ModalTitle><img src={Pokebola} width={30} alt='Pokebola' /> Locations </ModalTitle>
        </ModalHeader>
        <ModalBody className={styles.pokemap}>
          <p>
            <Location />
          </p>
        </ModalBody>
      </Modal>

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
            <EvolutionChains />
          </ Route>
          <Route exact path="/Encounter">
            <Encounter />
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
          <Route exact path="/Battle">
            <Battle />
          </ Route>
          <Route path="/GroupDetails/:groupName">
            <GroupDetails />
          </ Route>
        </Container>
      </Switch>
    </div>

  )
}

export default AppPokemon;
