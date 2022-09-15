import { useState, useEffect} from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Review({ review }) {

    
    return (      
                 
        
            <div className="border border-5 border-light bg-dark text-white" style={{borderRadius: "30px", width: "100%"}}>  
                         
                <div className="">
                    <img src={review.game.image} className="m-4" style={{width:"230px", height:"auto"}} />
                    <div style={{fontSize: "30px"}}>Game: {review.game.title}</div>
                    <div style={{fontSize: "30px"}}>Rating: {review.rating}</div>
                    <div style={{fontSize: "30px"}}>"{review.content}"</div>
                    <div style={{fontSize: "30px"}}>Written by: {review.user.username}</div>
                    
                    

                </div>              
            </div>
        
        
        
            
    );
}

export default Review;
