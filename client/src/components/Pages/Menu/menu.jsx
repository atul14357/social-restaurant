import React from 'react'
import Navbar from '../../Navbar/index'
import Home from '../Home/home'
import styles from "./styles.module.css"
import HorizontalScroll from "react-horizontal-scroll-container"

const Menu = () => {
    return (
        <div>
            <Navbar />
            <HorizontalScroll className={styles.menu_cards} >
                <div>
                    <Home img="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" title="Pancake" />
                    <div className={styles.menu_card_btn_container}>
                        <button className={styles.menu_card_btn}>Add to cart</button>
                    </div>
                </div>
                <div>
                    <Home img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" title="Pizza" />
                    <div className={styles.menu_card_btn_container}>
                        <button className={styles.menu_card_btn}>Add to cart</button>
                    </div>
                </div>
                <div>
                    <Home img="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" title="Cake" />
                    <div className={styles.menu_card_btn_container}>
                        <button className={styles.menu_card_btn}>Add to cart</button>
                    </div>
                </div>
                <div>
                    <Home img="https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" title="French Toast" />
                    <div className={styles.menu_card_btn_container}>
                        <button className={styles.menu_card_btn}>Add to cart</button>
                    </div>
                </div>
                <div>
                    <Home img="https://images.unsplash.com/photo-1632203171982-cc0df6e9ceb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbWJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" title="Hamburger" />
                    <div className={styles.menu_card_btn_container}>
                        <button className={styles.menu_card_btn}>Add to cart</button>
                    </div>
                </div>
            </HorizontalScroll>
        </div>
    )
}

export default Menu