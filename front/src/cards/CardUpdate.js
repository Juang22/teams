import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const CardUpdate = ( {show, refresh,setShow,name,setName,ingredients,setIngredients,value,setValue, setRefresh} ) => {
  
  const handleClose = () => {
    setShow(false)
    setRefresh(!refresh)
    };
  

  const handleSave = () => {
    
      let id = name.replaceAll(' ','%20')
        
      value = parseInt(value)
      let objPl = {name,ingredients,value}
    fetch(`http://localhost:8080/api/v1/platos/${id}`,{
      method:'PUT',
      body: JSON.stringify(objPl),
      headers:{
          "Content-Type":"application/json",
      }})
      .then((response) => handleClose())
      
      
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
                
                autoFocus
                onChange={(e)=> setName(e.target.value)}
                name='name'
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingredientes</Form.Label>
              <Form.Control
                type="text"
                
                onChange={(e) => setIngredients(e.target.value)}
                name='ingredients'
                value={ingredients}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                
                onChange={(e)=> setValue(e.target.value)}
                name='value'
                value={value}

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
export default CardUpdate;