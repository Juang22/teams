import React from 'react'
import { useState, useEffect } from "react";
import './App.css';
import CardPlayers from  './cards/cards';


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
        <h1>Delivery</h1>
      </header>
      <div className='cards'>
        {Platos.map((element,index) => (
          <CardPlayers  key={index} title={element.name} text={element.ingredients} btn='Comprar'/>
        ))}
        </div>
    </div>
  );
}

export default App;
