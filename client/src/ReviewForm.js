import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import AddReview from "./assets/addreview.png";

function GameForm({ setReviews, user, setUser, games }) {

    // useEffect(()=>{
        // fetch('/reviews')
        //     .then(res=>res.json())
        //     .then(reviewsData => setReviews(reviewsData))
    // },[])

    const [form, setForm] = useState({rating: "", content: "", game_id: "", user_id: user.id})
    
    function handleChange (e) {
        setForm((prevForm) => {
            return {
                ...prevForm, [e.target.name]: e.target.value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        setReviews(reviews=>[...reviews, form])
        fetch('/addreview',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
        })
        .then(data => {
            if (!data.ok) {
                throw Error(data.status)                    
            } else {
                fetch('/reviews')
                .then(res=>res.json())
                .then(reviewsData => {
                    const updatedUser={...user}
                    updatedUser.reviews.push(reviewsData[reviewsData.length-1])
                    setUser(updatedUser)
                    setReviews(reviewsData)
                })
                alert("Review Added!")
                setForm ({
                    rating: "",
                    content: "",
                    game_id: ""
                });
            }
            return data.json();
        })
    }

    return(
        <div className="" style={{height: "100vh", paddingTop: "220px"}}>
            <Container >
                <Row>
                    <Col xs={2} md={0}></Col>
                    <Col xs={10} md={12} className="text-center p-1 bg-dark border border-light border-5  text-light" style={{borderRadius: "30px"}}>
                        <img src={AddReview} style={{width:"60%"}} />
                        <Form className="" id="gameform" onSubmit={(e) => {                
                            handleSubmit(e)                
                        }}>
            
                            <Form.Group  className="mb-0" controlId="formBasicRating" >
                            <Form.Label>Which Game Would You Like to Review?</Form.Label>
                                <Form.Select name="game_id" className="mb-4" aria-label="Select Game" onChange={handleChange} value={form.rating}>
                                    <option className="text-center">Select a Game to Review</option>
                                    {games.map((game) => {
                                        return(
                                            <option value={game.id} key={game.id}>{game.title}</option>
                                        )
                                    })}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group  className="mb-0" controlId="formBasicRating" >
                                <Form.Label>Select a Rating</Form.Label>
                                <Form.Select name="rating" className="mb-4" aria-label="Default select example" onChange={handleChange} value={form.rating}>  
                                                        
                                    <option className="text-center">Game Rating</option>
                                    <option value="★">★</option>
                                    <option value="★★">★★</option>
                                    <option value="★★★">★★★</option>
                                    <option value="★★★★">★★★★</option>
                                    <option value="★★★★★">★★★★★</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-4" controlId="formBasicLocation" >
                                <Form.Label>Your Thoughts</Form.Label>
                                <Form.Control className="text-center" name="content" type="string" placeholder="Tell Us What You Think" onChange={handleChange} value={form.content}/>
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GameForm;