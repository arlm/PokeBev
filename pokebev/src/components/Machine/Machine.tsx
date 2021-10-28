import React from 'react';
import styles from './Machine.module.css';
import { useState, useEffect } from "react";

export default function Machine() {
  const [machines, setMachines] = useState<any>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/machine/')
      .then((response) => response.json())
      .then((data) => setMachines(data));
  }, []);

  return (
    <ul className="MachineList">
      {
        machines.map((machine: any) => <li key={machine.name}>{machine.move}</li>)
      }
    </ul>
  );
}
