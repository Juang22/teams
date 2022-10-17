import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const CardForm = ( {show,setShow,name,ingredients,value} ) => {
  const [newPlato, setnewPlato] = useState();

  const handleClose = () => {
    setShow(false)
    };

  const onHandleChanges = (e) => {
    setnewPlato({...newPlato,[e.target.name]: e.target.value})
    
  }



  const handleSave = () => {
    
   
    fetch('http://localhost:8080/api/v1/platos',{
      method:'POST',
      body: JSON.stringify(newPlato),
      headers:{
          "Content-Type":"application/json"
      }})
      .then((response) => response.json())
      .then(data => {
        
        handleClose()})
      
      
  }
  // const handleShow = () => ;

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Plato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre del plato"
                autoFocus
                onChange={onHandleChanges}
                name='name'
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingredientes</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese los Ingredientes"
                onChange={onHandleChanges}
                name='ingredients'
                
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ingrese precio"
                onChange={onHandleChanges}
                name='value'
                

              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<CardForm />);
export default CardForm;