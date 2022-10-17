import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const CardUpdate = ( {show,setShow,objPl} ) => {
  const [newPlatoMod, setnewPlatoMod] = useState({
  });
  
  const handleClose = () => {
    setShow(false)
    };
  const onHandleChanges = (e) => {
    setnewPlatoMod({...newPlatoMod,[e.target.name]: e.target.value})
    
  }
  

  const handleSave = () => {
    console.log(newPlatoMod)
        let id = newPlatoMod.name.replaceAll(' ','%20')
        
        newPlatoMod.value = parseInt(newPlatoMod.value)
    // fetch(`http://localhost:3000/api/v1/platos/${id}`,{
    //   method:'PUT',
    //   body: JSON.stringify(newPlatoMod),
    //   headers:{
    //       "Content-Type":"application/json",
    //   }})
    //   .then((response) => response)
    //   .then(data => {
        
    //     handleClose()})
      
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
                onChange={onHandleChanges}
                name='name'
                value={objPl.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ingredientes</Form.Label>
              <Form.Control
                type="text"
                
                onChange={onHandleChanges}
                name='ingredients'
                value={objPl.ingredients}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                
                onChange={onHandleChanges}
                name='value'
                value={objPl.value}

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