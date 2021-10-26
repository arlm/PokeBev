import React from 'react';
import styles from './Location.module.css';
import { useState, useEffect } from "react";

interface LocationType {
  name: any,
  region: any,
  areas: any
}

export default function Location(){
  const [name, setName] = useState<any>('')
  const [locations, setLocations] = useState<any>(undefined)
  const [lista, setLista] = useState<any>([])
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/location')
      .then((resp) => resp.json())
      .then((dados) => setLista(dados.results))
      .catch(() => alert('Erro!'));
  }, []);
  
  function obterLocation () {
    if (name || name.length > 0) {
      fetch(`https://pokeapi.co/api/v2/location/${name}`)
      .then((resp) => resp.json())
      .then((dados) => setLocations(dados))
      .catch(() => alert('Erro!'));
    }
    else {
      alert('Esse espaço não pode ficar vazio.');
    }
  };
  
  return (
    <>
    
    <div>
      <input placeholder="Escolha uma location." list="pokemon" required minLength={1} value={name} onChange={e => setName(e.currentTarget.value)}/>
      <datalist id="pokemon"> {Object.keys(lista).length > 0 && lista.map((s: any) => <option value={s.name} key={s.name} />)}
      </datalist>
      <button onClick={ obterLocation }>Obter Location</button>
    </div>

    { locations &&
    <ul>
      <li>Nome: {locations?.name ?? "Selecione um id"}</li>
      <li>Região: {locations?.region.name ?? "Selecione um id"}</li>
      <li>Áreas: {locations?.areas[0].name ?? "Selecione um id"}</li>
    </ul>
    }
    </>
  
  );
}


