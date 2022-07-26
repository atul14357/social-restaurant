import React from 'react'
import { Card, CardSubtitle,CardText,CardTitle,CardBody} from "reactstrap";
import styles from './styles.module.css'
import Navbar from '../../Navbar/index'
import {Link} from 'react-router-dom'

const ReviewCard = ({ firstName,lastName,rating,comment }) => {
  return (
    <div>
        <Navbar />
    <Card className='shadow-lg m-2 p-3 rounded' style={{ width: '18rem' }}>
      <CardBody>
        <CardTitle tag="h1" className={styles.review_heading}>Reviews Page</CardTitle>
        <div className={styles.reviews_top}>
          <div className={styles.user_details}>

            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {firstName} {lastName || "John Doe"}
            </CardSubtitle>
            {[...Array(rating || 5)].map((rating) => {
              return <CardSubtitle tag="h5">⭐ </CardSubtitle>;
            })}
          </div>
          <div className="reviews-body">
            <CardText>
              {comment ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reiciendis delectus dignissimos, nisi pariatur fuga officiis itaque fugiat! Quibusdam accusantium quae beatae vel.Quas possimus reprehenderit sequi quia nesciunt sunt!"}
            </CardText>
          </div>
        </div>
      </CardBody>
    </Card>
    
    <div className={styles.review_btn_container}>
       <Link to="/add-review"><button style={{background: 'green'}} className={styles.review_btn}>Add review</button></Link>
    </div>
    
    </div>
  )
}

export default ReviewCard