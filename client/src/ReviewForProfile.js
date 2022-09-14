import { useState, useEffect, useReducer} from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ReviewForProfile({ review }) {

    return (      
                 
        
            <Row className="border border-5 border-light bg-dark text-white" style={{borderRadius:"30px"}}>  
                         
                <div className="">
                    <div style={{fontSize: "30px"}}>Rating: {review.rating}</div>
                    <div style={{fontSize: "30px"}}>"{review.content}"</div>

                </div>          
            </Row>
        
        
        
            
    );
}

export default ReviewForProfile;
