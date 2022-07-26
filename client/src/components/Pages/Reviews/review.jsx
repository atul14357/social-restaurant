import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import ReviewCard from './reviewCard';
import Navbar from '../../Navbar/index'

const ShowReviews = () => {


    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const getReviewsData = async () => {
            const { data } = await axios.get('/api/reviews/allReviews')
            console.log(data)
            setReviews(data)
        }
        getReviewsData()
    }, [])

    return (
        <>
        <Navbar />
           <Container  className="justify-content-center p-2">
               <h1 className='text-center' style={{color: 'orange',fontStyle: 'oblique'}}>Reviews</h1>
               <hr />

               <Row>
                    {
                        reviews.map(review => {
                            return <Col md={6} lg={4} sm={12} key={review.id}>
                                <ReviewCard review={review} />
                            </Col>
                        })
                    }
               </Row>


           </Container>

           
        </>
    )
}

export default ShowReviews