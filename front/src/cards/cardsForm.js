import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';


const CardForm = ({title,text,btn ,value}) => {
  console.log(title,text,btn)
  return (

    <div id="card-pl">
        <div>
        <h1>Crear Plato</h1>
          
          <input>Nombre Plato</input>
          <input>Nombre Plato</input>
          </div>
          <div>
          <div className='btn-mb'>
            <Button variant="primary">Crear</Button>
          </div>
          
          </div>
  
          
      </div>
   
  );
}

export default CardForm;