import React from 'react';
import { Button, Modal} from 'react-bootstrap';
import done from '../Assets/done.png';
import styles from './form.module.css';


export default function Alert({setShow, show}) {
 
  const handleClose = () => setShow(false);
  
  return (
    <div className={styles.modal}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <img src={done} alt="Realizado" />
          <p>Formulario enviado con exito</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Finalizar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
