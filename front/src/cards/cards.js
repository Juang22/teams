import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';


const CardPlayers = ({title,text,btn ,value}) => {
  console.log(title,text,btn)
  return (

    <div id="card-pl">
      <div>
      <h1>{title}</h1>
        
        <p>{text}</p>
        <p>${value}</p>
        </div>
        <div>
        <div className='btn-mb'>
          <Button variant="primary">Modificar</Button>
        </div>
        <div className='btn-mb'>
          <Button variant="primary">Borrar</Button>
        </div>
        
        </div>

        
    </div>
   
  );
}

export default CardPlayers;