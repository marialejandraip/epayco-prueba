import React from 'react';
import LogoFooter from '../Assets/LogoFooter.svg';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>ePayco © 2011 - 2019 todos los derechos reservados.</p>
      <img src={LogoFooter} alt="logo-footer"/>
    </div>
  )
}
