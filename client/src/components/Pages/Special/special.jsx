import React from 'react'
import Navbar from '../../Navbar/index'
import Home from '../Home/home'
import styles from "./styles.module.css"

const Special = () => {
  return (
    <div>
        <Navbar />
        <div className={styles.special_header}>
            <h1>Today's Special</h1>
        </div>
        <div className={styles.special_card_container}>
            <Home img="https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" title="Dough" />
            <Home img="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" title="Chocolate" />
        </div>
    </div>
  )
}

export default Special