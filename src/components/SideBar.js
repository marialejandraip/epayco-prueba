import React from 'react'
import Logo from '../Assets/logo.svg';
import Dashboard from '../Assets/house-outline.svg';
import Client from '../Assets/client.svg';
import styles from './sidebar.module.css';

export default function SideBar() {
  return (
    <>
    <nav className={styles.sidebar}>
      <img src={Logo} alt="logo" />
      <ul>
        <li>
        <img src={Dashboard} alt="dashboard" />
          Dashboard
        </li>
        <li>
        <img src={Client} alt="clients" />
          Clientes
        </li>
      </ul>
    </nav>
    </>
  )
}
