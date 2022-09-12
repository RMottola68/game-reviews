import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ReviewNoImage from "./ReviewNoImage"

function MyProfile({ user, setUser }){
    

    return(
        <Container className="text-center pt-5" style={{ borderRadius: "30px"}}>
            <Row  className="bg-dark border border-5 border-dark justify-contents-center" style={{borderRadius: "30px"}}>  
                <Row className="my-2 text-center">
                    <div className="text-light">
                        <h1>My Profile</h1>
                        <div style={{fontSize: "30px"}}>{user.username}</div>
                        <div style={{fontSize: "30px"}}>Are you a Developer: {user.is_developer === "true" ? "yes" : "no"}</div>
                        <div style={{fontSize: "30px"}}>Joined: {user.join_date}</div>   
                        <img src={user.image} className="mx-1 "  />          
                    </div>    
                </ Row>
                <Row>
                <h2 className="text-center text-light">Reviews You've Written</h2>
                    {user.reviews.length > 0 ? user.reviews.map((review) => <ReviewNoImage review={review} key={review.id} />) : <h3 className="text-center">You haven't written any reviews!</h3>}
                </Row>
                   
                        
            </ Row>
        </ Container>
    )
}

export default MyProfile;