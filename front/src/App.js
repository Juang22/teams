import React from 'react'
import { useState, useEffect } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CardPlayers from  './cards/Cards';
import CardForm from './cards/CardsForm';
import Button from 'react-bootstrap/Button';


function App() {
  const [platos, setPlatos] = useState([]);
  const [show, setShow] = useState(false);
  const [refresh , setRefresh] = useState(false)
  
  
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true); 
    
    };


  

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/platos')
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
        setPlatos(articulos)
        
      })
  },[show,refresh])



  return (
    <div className="App">
      <header className="App-header">
        <h1>Menu Disponible</h1>
        <Button variant="primary" onClick={handleShow}>Crear Plato</Button>
      </header>
      
      <div className='cards'>
        { 
        platos.map((element,index) => (
          <CardPlayers refresh={refresh} setRefresh={setRefresh} show={show} setShow={setShow}   key={index} title={element.name} valuepl={element.value} text={element.ingredients} />
        ))}
        <CardForm show={show} setShow={setShow} />
        </div>
    </div>
  );
}

export default App;
