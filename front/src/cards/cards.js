import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import CardForm from './CardsForm';
import CardUpdate from './CardUpdate';

const CardPlayers = ({title,text ,value}) => {
  const [namePl, setNamePl] = useState({name:'',ingre:'',valor:0})
  const [show, setShow] = useState(false);
  
  var objPl = {}

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  let name = React.createRef(),
      ingredients = React.createRef(),
      price = React.createRef();

  
  const onHandleUpdate = () => {
    objPl.name = name.current.value;
    objPl.ingre = ingredients.current.innerText;
    objPl.valor = price.current.innerText.slice(1, -1);
    // setNamePl({name:name.current.innerText,
    //   ingre:ingredients.current.innerText,
    // valor:price.current.innerText.slice(1, -1)})
    
    console.log(objPl)
    setShow(true)
  }

  const onHandleDelete = () => {

  }


  return (

    <div id="card-pl">
      <div>
      <h1 ref = {name}>{title}</h1>
        
        <p ref = {ingredients}>{text}</p>
        <p ref = {price}>${value}</p>
        </div>
        <div>
        <div className='btn-mb'>
          <Button variant="primary" onClick={onHandleUpdate} >Modificar</Button>
          <CardUpdate show={show}  setShow={setShow} objPl={objPl}/>
        </div>
        <div className='btn-mb'>
          <Button onClick={onHandleDelete} variant="primary">Borrar</Button>
        </div>
        
        </div>

        
    </div>
   
  );
}

export default CardPlayers;