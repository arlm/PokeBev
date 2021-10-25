import React from 'react';
import styles from './Location.module.css';
import { useState, useEffect } from "react";

interface LocationType {
  name: any,
  region: any,
  areas: any
}

export default function Location(){
  const [id, setId] = useState<any>(0)
  const [locations, setLocations] = useState<any>(undefined)
  
  
  function obterLocation () {
    
    
      fetch(`https://pokeapi.co/api/v2/location/${id}`)
      .then((resp) => resp.json())
      .then((dados) => setLocations(dados));   
    
  };
  
  return (
    <>
    <div>
      
      <input type="number" value={id} onChange={e => setId(e.currentTarget.value)}/>
      <button onClick={obterLocation}>Obter Location</button>

    </div>
    
    <ul>
      <li>Name: {locations?.name ?? "Selecione um id"}</li>
      <li>Region: {locations?.region.name ?? "Selecione um id"}</li>
      <li>Areas: {locations?.areas[0].name ?? "Selecione um id"}</li>
    </ul>
    
    </>
  
  );
}


