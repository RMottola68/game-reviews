import { useState, useEffect, useReducer} from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Review({ review }) {

   
    return (      
                 
        
            <div className="card border border-5 border-light bg-dark">  
            <Link className="text-decoration-none text-white" to={`/reviews/${review.id}`}>              
                <div className="">
                    <img src={review.game.image} className="mx-1 "  />
                    <div style={{fontSize: "30px"}}>Game: {review.game.title}</div>
                    <div style={{fontSize: "30px"}}>Rating: {review.rating}</div>
                    <div style={{fontSize: "30px"}}>"{review.content}"</div>
                    <div style={{fontSize: "30px"}}>Written by: {review.user.username}</div>
                    <div style={{fontSize: "30px"}}>Publisher: {review.publisher}</div>
                    
                    

                </div>    
                </Link>    
                <Link to="/addreview">
                    <Button>Leave a Review</Button>    
                </Link>            
            </div>
        
        
        
            
    );
}

export default Review;
