import React from 'react';

import { Container, Form, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function GameForm({ setGames }) {

        const [form, setForm] = useState({title: "", developer: "", publisher: "", release_date: "", genre:"", image:""})
        
        function handleChange (e) {
            setForm((prevForm) => {
                return {
                    ...prevForm, [e.target.name]: e.target.value
                }
            })
        }
    
        function handleSubmit(e){
            e.preventDefault()
            
            setGames(games=>[...games, form])
            fetch('/addgame',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
            })
            .then(data => {
                if (!data.ok) {
                    alert("Game already exists!")
                    throw Error(data.status)                    
                } else {
                    fetch('/games')
                    .then(res=>res.json())
                    .then(gamesData => setGames(gamesData))
                    alert("Game Added!")
                    setForm ({
                        title: "",
                        developer: "",
                        publisher: "",
                        release_date: "",
                        genre: "",
                        image: ""
                    });
                }
                return data.json();
            })
        }

    return(
    <div className="p-5">
        <Container className="text-center p-5 bg-dark text-light" style={{borderRadius: "30px"}}>
            <h1>Add a Game to our Library</h1>
            <Form className="p-5" onSubmit={(e) => {                
                handleSubmit(e)                
            }}>
                <Form.Group  className="mb-0" controlId="formBasicName" >
                    <Form.Label>Game Title</Form.Label>
                    <Form.Control className="text-center" name="title" type="string" placeholder="Enter Game Title" onChange={handleChange} value={form.title}/>
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicLocation" >
                    <Form.Label>Developer</Form.Label>
                    <Form.Control className="text-center" name="developer" type="string" placeholder="Enter Developer" onChange={handleChange} value={form.developer}/>
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group  className="mb-0" controlId="formBasicRating" >
                <Form.Label>Publisher</Form.Label>
                    <Form.Control className="text-center" name="publisher" type="string" placeholder="Enter Publisher" onChange={handleChange} value={form.publisher}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group  className="mb-0" controlId="formBasicPrice" >
                    <Form.Label>Release Date</Form.Label>
                    <Form.Control className="text-center" name="release_date" type="string" placeholder="Enter Release Date" onChange={handleChange} value={form.release_date}/>
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group  className="mb-0" controlId="formBasicPrice" >
                    <Form.Label>Genre</Form.Label>
                    <Form.Control className="text-center" name="genre" type="string" placeholder="Enter Genre" onChange={handleChange} value={form.genre}/>
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group  className="mb-0" controlId="formBasicPrice" >
                    <Form.Label>Add Game Cover</Form.Label>
                    <Form.Control className="text-center" name="image" type="string" placeholder="Image URL Here" onChange={handleChange} value={form.image}/>
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