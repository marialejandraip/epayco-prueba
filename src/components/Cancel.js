import React from 'react';
import { Button, Modal} from 'react-bootstrap';
import cancelImg from '../Assets/cancel.png';
import styles from './form.module.css';


export default function Cancel({setCancel, cancel}) {
 
  const handleClose = () => setCancel(false);
  
  return (
    <div className={styles.modal}>
       <Modal show={cancel} onHide={handleClose}>
        <Modal.Body>
          <img src={cancelImg} alt="Realizado" />
          <p>Formulario contiene errores</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Regresar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
