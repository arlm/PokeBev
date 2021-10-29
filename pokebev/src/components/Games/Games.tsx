import VersionGroup from "./VersionGroup/VersionGroup";
import Version from "./Version/Version";
import Pokedexes from "./Pokedexes/Pokedexes";
import Generations from "./Generation/Generations";
import styles from "./Games.module.css"
import "./Games.css"
import { Nav, Tabs, Tab } from "react-bootstrap";

export default function Games() {
  return (
    <div className='Games'>

      <Tabs
        defaultActiveKey="Generations"
        id="uncontrolled-tab-example"
        className={styles.Games}
      >
        
        <Tab eventKey="Generations" title="Generations">
        <Generations />
        </Tab>
        <Tab eventKey="Pokedexes" title="Pokedexes">
        <Pokedexes />
        </Tab>
        <Tab eventKey="Version" title="Version">
        <Version />
        </Tab>
        <Tab eventKey="Version-Group" title="Version-Group" >
        <VersionGroup />
        </Tab>
      </Tabs>

    
    </div>
  );
}
