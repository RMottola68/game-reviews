import { useState, useEffect, useReducer} from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ReviewNoImage({ review }) {

    
    return (      
                 
        
            <div className="border border-5 border-light bg-dark text-white mt-2" style={{borderRadius: "30px"}}>  
                         
                <div className="">
                    <div style={{fontSize: "30px"}}>Rating: {review.rating}</div>
                    <div style={{fontSize: "30px"}}>"{review.content}"</div>                  
                </div>          
            </div>
        
        
        
            
    );
}

export default ReviewNoImage;
