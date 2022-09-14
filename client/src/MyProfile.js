import { useEffect } from "react";
import { Row, Col, Container } from 'react-bootstrap';
import ReviewForProfile from './ReviewForProfile';

function MyProfile({ user }){


    console.log(user)

    return(
        <Container className="text-center pt-5" style={{ borderRadius: "30px"}}>
            <Row  className="bg-dark border border-5 border-dark justify-contents-center" style={{borderRadius: "30px"}}>  
                <Row className="my-2 text-center">
                    <div className="text-light">
                        <h1>My Profile</h1>
                        <div style={{fontSize: "30px"}}>{user.username}</div>
                        <div style={{fontSize: "30px"}}>Are you a Developer: {user.is_developer === "true" ? "yes" : "no"}</div>
                        <div style={{fontSize: "30px"}}>Joined: {user.join_date}</div>   
                        <img src={user.image} className="" style={{width: '800px'}}  />          
                    </div>    
                </ Row>
                <Row className="px-5">
                <h2 className="text-center text-light" >Reviews You've Written</h2>
                    {user.reviews.length > 0 ? user.reviews.map((review) => <ReviewForProfile review={review} key={review.id} />) : <h3 className="text-center text-light" >You haven't written any reviews yet!</h3>}
                </Row>
                   
                        
            </ Row>
        </ Container>
    )
}

export default MyProfile;