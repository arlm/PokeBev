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
    <div className={styles.listaMachine}> <p> <h3> <img src={TM} width={30}/> {machines?.item.name ?? "ERROR"} </h3>
        <span>Movimento:</span> {machines?.move.name ?? "ERROR"} <br/>
        <span>Versão do Game:</span> {machines?.version_group.name ?? "ERROR"} </p>          
    </div>
  );
}

