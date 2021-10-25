import React, { ReactComponentElement } from 'react';
import styles from './Machine.module.css';
import { useState, useEffect } from "react";
import MachineAnalysis from './MachineAnalysis'


interface MachineType {
  url:string,
}

export default function Machine() {
  const [machines, setMachines] = useState<MachineType[]>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/machine')
      .then((response) => response.json())
      .then((data) => setMachines(data.results));
  }, []);

  console.log(machines);

  return (
    <ul>
      {
        machines.map((machine) => <MachineAnalysis url={machine.url} />)
      }
    </ul>
  );
}
