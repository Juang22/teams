import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const CardPlayers = ({title,text,btn}) => {
  console.log(title,text,btn)
  return (

    <div id="card-pl">
      <h1>{title}</h1>
        
        <p>{text}</p>
        <Button variant="primary">{btn}</Button>
    </div>
   
  );
}

export default CardPlayers;