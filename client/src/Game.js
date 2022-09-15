import { useState, useEffect} from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Game({ game }) {

   
    return (      
                 
        
            <div className="border border-5 border-light bg-dark mb-3" style={{borderRadius: "30px", width: "100%"}}>  
                <Link className="text-decoration-none text-white" to={`/games/${game.id}`}>              
                    <div className="">
                        <img src={game.image} className="m-4 " style={{width:"230px", height:"auto"}}/>
                        <div style={{fontSize: "30px"}}>Title: {game.title}</div>
                        <div style={{fontSize: "30px"}}>Genre: {game.genre}</div>
                        <div style={{fontSize: "30px"}}>Developer: {game.developer}</div>
                        <div style={{fontSize: "30px"}}>Publisher: {game.publisher}</div>
                        <div style={{fontSize: "30px"}}>Release Date: {game.release_date}</div>
                        

                    </div>    
                </Link>    
                <Link to="/addreview" className="my-2">
                    <Button className="mb-2">Leave a Review</Button>    
                </Link>            
            </div>
        
        
        
            
    );
}

export default Game;
