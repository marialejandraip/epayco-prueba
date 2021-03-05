import React from 'react';
import Footer from '../components/Footer';
import FormIn from '../components/Form';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import styles from './main.module.css';


export default function Main() {
  return (
    <div className={styles.main}>
      <SideBar />
      <section className={styles.section}>
        <Header />
        <FormIn />
        <Footer />
      </section>
    </div>
  )
}
