import React, {useState, useEffect } from 'react';
import { Button, Form, Row, Col} from 'react-bootstrap';
import styles from './form.module.css';


export default function FormIn() {

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
      <div>
        <h3>Información del formulario</h3>
      </div>
      <p>Ingrese el titulo y la descripción que visualizarán los usuarios durante el proceso de pago</p>
    <Form>
      <Row> 
        <Form.Group as={Col} controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>

        <Form.Group as={Col} controlId="exampleForm.ControlInput1">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="email"  required/>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
          <Form.Label>Pais</Form.Label>
          <Form.Control as="select">
          {countries.map((country, index) => (
            <option key={index} >{country.name}</option>
          ))}
          
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="exampleForm.ControlInput1">
          <Form.Label>Número de documento</Form.Label>
          <Form.Control type="number" placeholder="" required/>
        </Form.Group>

      </Row>

  <Button variant="primary" type="submit">
    Enviar
  </Button>
  <Button variant="outline-primary" type="submit">
    Cancelar
  </Button>
</Form>
    </div>
  )
}
