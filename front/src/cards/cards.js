import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button'
import CardUpdate from './CardUpdate';

const CardPlayers = ({title,text ,valuepl, refresh, setRefresh}) => {
  const [name, setName] = useState();
  const [ingredients, setIngredients] = useState();
  const [value, setValue] = useState();
  const [show, setShow] = useState(false);
  
  var objPl = {}

  const handleClose = () => setShow(false);
  const handleRefresh = () => setRefresh(!refresh);
  const handleShow = () => setShow(true);

  
  let namepl = React.createRef(),
      ingre = React.createRef(),
      price = React.createRef();

  
  const onHandleUpdate = () => {
    setName(namepl.current.innerText);
    setIngredients(ingre.current.innerText);
    setValue(price.current.innerText.slice(1, -1));
    setShow(true)
  }

  const onHandleDelete = () => {
    
    let id = namepl.current.innerText;
    console.log(id)
    fetch(`http://localhost:8080/api/v1/platos/${id}`,{
      method:'DELETE',
      headers:{
          "Content-Type":"application/json"
      }})
      .then((response) => handleRefresh())
      
  }


  return (

    <div id="card-pl">
      <div>
      <h1 ref = {namepl}>{title}</h1>
        
        <p ref = {ingre}>{text}</p>
        <p ref = {price}>${valuepl}</p>
        </div>
        <div>
        <div className='btn-mb'>
          <Button variant="primary" onClick={onHandleUpdate} >Modificar</Button>
          <CardUpdate refresh={refresh} show={show} setRefresh={setRefresh} setShow={setShow} setIngredients={setIngredients} setName={setName} setValue={setValue} name={name} value={value} ingredients={ingredients}/>
        </div>
        <div className='btn-mb'>
          <Button onClick={onHandleDelete} variant="primary">Borrar</Button>
        </div>
        
        </div>

        
    </div>
   
  );
}

export default CardPlayers;