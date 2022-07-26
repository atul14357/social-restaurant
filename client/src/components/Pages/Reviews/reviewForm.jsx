import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import Navbar from '../../Navbar/index'
import styles from './styles.module.css'
import {useDispatch} from 'react-redux'



const AddReview = ({ history }) => {
    const [form,setForm] = useState({})
    const [errors,setErrors] = useState({})
    const [message,setMessage] = useState('')

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        })

        if(!!errors[field])
            setErrors({
                ...errors,
                [field]: null,
            })
    }

    const dispatch = useDispatch()

    const validateForm = () => {
        const {firstName,lastName,rating,comment,published,email,mobile} = form
        const newErrors = {}

        if(!firstName || firstName==='') newErrors.firstName = 'Please enter your firstname'
        if(!lastName || lastName==='') newErrors.lastName = 'Please enter your lastname'
        if(!rating || rating===0) newErrors.rating = 'Please give your rating'
        if(!comment || comment==='') newErrors.comment = 'Please write something!'
        else if(comment.length<10) newErrors.comment = 'Review is too short'
        if(!email || email==='') newErrors.email = 'Please enter your email'
        else if(email.indexOf('@')<=-1) newErrors.email = 'Please enter correct email' 
        if(!mobile || mobile==='') newErrors.mobile = 'Please enter your mobile'
        else if(mobile.length!=10) newErrors.mobile = 'Please enter valid mobile'
        if(!published) newErrors.published = 'Please check the box'

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage('')

        const formErrors = validateForm()
        if(Object.keys(formErrors).length>0){
            setErrors(formErrors)
            setMessage('Whoops, please check for errors.')
        }else{
            console.log('form submitted')
            console.log(form)
            //dispatch(registerReview(form))
        }
        
    }

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const [published, setPublished] = useState(true)
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState(0)

    const addReviewHandler = async (e) => {

        e.preventDefault()


        const formData = new FormData()

        formData.append('firstName', firstName)
        formData.append('lastName', lastName)
        formData.append('rating', rating)
        formData.append('comment', comment)
        formData.append('published', published)
        formData.append('email', email)
        formData.append('mobile', mobile)

        await axios.post('/api/reviews', formData)
        history.push('/reviews')

    }

    // const validateForm = () =>{
    //     const {firstName,lastName,}
    // }
    // const handleSubmit = e => {
    //     e.preventDefault() 

    //     const formErrors=validateForm()
    // }


    return (
        <>
            <Navbar />
            <Container className={styles.add_review_heading}>
                <div className='text-center ' style={{color: 'orange'}}>
                    <h1>Add Review</h1>
                </div>
                <br />

                <Form onSubmit={addReviewHandler} method="POST" encType='multipart/form-data'>

                    <Form.Group className="mb-3 mt-6" controlId="firstname">
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control
                            value={form.firstName} 
                            onChange={(e) => setField('firstName',e.target.value)}
                            type="text"
                            placeholder='Enter your firstname'
                            isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type='Invalid'>
                            {errors.firstName}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="lastname">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control
                            value={form.lastName}
                            onChange={(e) => setField('lastName',e.target.value)}
                            type="text"
                            placeholder='Enter your lastname'
                            isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type='Invalid'>
                            {errors.lastName}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="rating">
                        <Form.Label>Rating (1-5)</Form.Label>
                        <Form.Control
                            value={form.rating}
                            onChange={(e) => setField('rating',e.target.value)}
                            type="number"
                            placeholder='Enter your rating'
                            isInvalid={!!errors.rating}
                        />
                        <Form.Control.Feedback type='Invalid'>
                            {errors.rating}
                        </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                            value={form.comment}
                            onChange={(e) => setField('comment',e.target.value)}
                            as="textarea"
                            placeholder='Enter your review'
                            isInvalid={!!errors.comment}
                        />
                        <Form.Control.Feedback type='Invalid'>
                            {errors.comment}
                        </Form.Control.Feedback>
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="publishedCheckedid">
                        <Form.Check
                            type="checkbox"
                            onChange={(e) => setPublished(e.target.checked)}
                            label="publish"
                        />
                        <Form.Check.Feedback type='Invalid'>
                            {errors.firstName}
                        </Form.Control.Feedback>
                    </Form.Group> */}

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            value={form.email}
                            onChange={(e) => setField('email',e.target.value)}
                            type="text"
                            placeholder='Enter your email'
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type='Invalid'>
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="mobile">
                        <Form.Label>Mobile (10 digit)</Form.Label>
                        <Form.Control
                            value={form.mobile}
                            onChange={(e) => setField('mobile',e.target.value)}
                            type="number"
                            placeholder='Enter your mobile'
                            isInvalid={!!errors.mobile}
                        />
                        <Form.Control.Feedback type='Invalid'>
                            {errors.mobile}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId='submit'>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Add Review
                    </Button>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default AddReview