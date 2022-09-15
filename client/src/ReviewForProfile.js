import { useState, useEffect, useReducer} from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ReviewForProfile({ review }) {

    return (      
                 
        
            <div className="m-1 border border-5 border-light bg-dark text-white" style={{borderRadius:"30px", width: "auto"}}>  
                         
                <div className="">
                    <div style={{fontSize: "30px"}}>Rating: {review.rating}</div>
                    <div style={{fontSize: "30px"}}>"{review.content}"</div>

                </div>          
            </div>
        
        
        
            
    );
}

export default ReviewForProfile;
