import React, {useState, useEffect } from 'react';
import { Button, Form, Row, Col} from 'react-bootstrap';
import styles from './form.module.css';
import Alert from './Alert';
import Cancel from './Cancel';


export default function FormIn() {
  const [show, setShow] = useState(false);
  const [cancel, setCancel] = useState(false);

  const handleShow = () => setShow(true);
  const handleCancel = () => setCancel(true);

  const [countries, setCountries] =useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all',{
    })
    .then( res => res.json())
    .then( data => {
      setCountries(data)
      //console.log(data)
    })
  }, [])

  return (

    <div className={styles.form}>
      <div className={styles.title}>
        <h4>Información del formulario</h4>
      </div>
      <p>Ingrese el titulo y la descripción que visualizarán los usuarios durante el proceso de pago</p>
    <Form>
      <Row> 
        <Form.Group as={Col} controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>

        <Form.Group as={Col} controlId="exampleForm.ControlInput1">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text"  required/>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
          <Form.Label>Pais</Form.Label>
          <Form.Control as="select">
          {countries.map((country, index) => (
            <option key={index}>{country.name}</option>
          ))}
          
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="exampleForm.ControlInput1">
          <Form.Label>Número de documento</Form.Label>
          <Form.Control type="number" placeholder="" required/>
        </Form.Group>

      </Row>

  <Button variant="primary" type="submit" onClick={handleShow}>
    Enviar
  </Button>
  <Button variant="outline-primary" type="submit" onClick={handleCancel}>
    Cancelar
  </Button>
    <Alert 
    setShow={setShow}
    show={show}
    />
    <Cancel 
    setCancel={setCancel}
    cancel={cancel}
    />

</Form>
    </div>
  )
}
