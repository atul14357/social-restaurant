//----------
//Components
//----------
import React from 'react'
import styles from "./styles.module.css"

class Card extends React.Component {
    render() {
      return(
          <div className={styles.card}>
            <img src={this.props.img} className={styles.card_image}/>
            <div className={styles.card_body}>
              <h2>{this.props.title}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              
            </div>
          </div>
      )
    }
  }
  
  class Home extends React.Component {
    render() {
      return (
        <>
        
         <div className={styles.cards}>
          
           <Card
            img={this.props.img}
            title={this.props.title}
            />
        </div>  
        </>
      )
    }
  }
  

  export default Home;
  