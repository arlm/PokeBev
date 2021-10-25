import { url } from "inspector";
import React, { useEffect, useState } from "react";

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
    <li> <p> Machine ID: {machines?.id} <br/>
        Name: {machines?.item.name ?? "ERROR"} <br/>
        Move: {machines?.move.name ?? "ERROR"} <br/>
        Version Group: {machines?.version_group.name ?? "ERROR"} </p>
    </li>
  );
}

