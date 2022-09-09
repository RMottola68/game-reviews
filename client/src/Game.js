import { useState, useEffect, useReducer} from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Game({ game }) {

   
    return (      
                 
        
            <div className="card border border-5 border-light bg-dark">  
            <Link className="text-decoration-none text-white" to={`/games/${game.id}`}>              
                <div className="">
                    <div style={{fontSize: "30px"}}>Title: {game.title}</div>
                    <div style={{fontSize: "30px"}}>Genre: {game.genre}</div>
                    <div style={{fontSize: "30px"}}>Developer: {game.developer}</div>
                    <div style={{fontSize: "30px"}}>Publisher: {game.publisher}</div>
                    <div style={{fontSize: "30px"}}>Release Date: {game.release_date}</div>
                    <img src={game.image} className="mx-1 "  />

                </div>    
                </Link>    
                <Link to="/addreview">
                    <Button>Leave a Review</Button>    
                </Link>            
            </div>
        
        
        
            
    );
}

export default Game;
