import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function GameForm({ setReviews, user, games }) {

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
                .then(reviewsData => setReviews(reviewsData))
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
        <div className="p-5">
            <Container className="text-center p-5 bg-dark text-light" style={{borderRadius: "30px"}}>
                <h1>Review a Game</h1>
                <Form className="p-5" id="gameform" onSubmit={(e) => {                
                    handleSubmit(e)                
                }}>
    
                    <Form.Group  className="mb-0" controlId="formBasicRating" >
                    <Form.Label>Which Game Would You Like to Review?</Form.Label>
                        <Form.Select name="game_id" className="mb-4" aria-label="Default select example" onChange={handleChange} value={form.rating}>
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
            </Container>
        </div>
    )
}

export default GameForm;