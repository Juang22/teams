import React from 'react'
import { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CardPlayers from  './cards/cards';
import CardForm from './cards/cardsForm';
import Button from 'react-bootstrap/Button';


let arrayPrueba = [
  {title:'titulo 1', text:'card 1', button:'seleccionar'},
  {title:'titulo 2', text:'card 2', button:'seleccionar'},
  {title:'titulo 3', text:'card 3', button:'seleccionar'},
  {title:'titulo 4', text:'card 4', button:'seleccionar'},
  {title:'titulo 5', text:'card 5', button:'seleccionar'},
  {title:'titulo 1', text:'card 1', button:'seleccionar'},
  {title:'titulo 2', text:'card 2', button:'seleccionar'},
  {title:'titulo 3', text:'card 3', button:'seleccionar'},
  {title:'titulo 4', text:'card 4', button:'seleccionar'},
  {title:'titulo 5', text:'card 5', button:'seleccionar'},
  
]


function App() {
  const [Platos, setPlatos] = useState([]);
  const [Crear, setCrear] = useState(false);

  const onCrearPlato = () => {
    setCrear(true)
  }

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/platos')
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
        setPlatos(articulos)
        console.log(Platos)
        console.log(articulos)
      })
  },[])



  return (
    <div className="App">
      <header className="App-header">
        <h1>Menu Disponible</h1>
        <Button variant="primary" onClick={onCrearPlato}>Crear Plato</Button>
      </header>
      
      <div className='cards'>
        {Crear ? <CardForm />
        :Platos.map((element,index) => (
          <CardPlayers  key={index} title={element.name} value={element.value} text={element.ingredients} />
        ))}
        </div>
    </div>
  );
}

export default App;
