import { url } from "inspector";
import React, { useEffect, useState } from "react";

interface MachineData {
  url: string,
  id?: number,
  item?: string,
  name?:string,
}

export default function MachineAnalysis(parametros: MachineData) {
  const [machines, setMachines] = useState<MachineData[]>([]);

  useEffect(() => {
    fetch(parametros.url)
      .then((response) => response.json())
      .then((data) => setMachines(data));
  }, []);

  console.log(machines);

  return (
    <li key={parametros.item}> {parametros.url} </li>
  );
}

