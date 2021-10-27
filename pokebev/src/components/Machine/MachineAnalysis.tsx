import styles from './Machine.module.css';
import { url } from "inspector";
import React, { useEffect, useState } from "react";
import TM from './tm.png';

interface MachineData {
  url: string,
  id?: any,
  name?:any,
}

export default function MachineAnalysis(parametros: MachineData) {
  const [machines, setMachines] = useState<any>(undefined);

  useEffect(() => {
    fetch(parametros.url)
      .then((response) => response.json())
      .then((data) => setMachines(data));
  }, []);

  console.log(machines);

  return (
    <div className={styles.listaMachine}> <p><img src={TM} width={30}/> Nome: {machines?.item.name ?? "ERROR"} <br/>
        Movimento: {machines?.move.name ?? "ERROR"} <br/>
        Versão do Game: {machines?.version_group.name ?? "ERROR"} </p> 
    <hr />          
    </div>
  );
}

