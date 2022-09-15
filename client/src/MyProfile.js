import { useEffect } from "react";
import ReviewForProfile from './ReviewForProfile';
import { Row, Col, Container } from 'react-bootstrap';


function MyProfile({ user }){

    return(
        <Container className="text-light text-center pt-5" style={{height: "100%"}} >
            <Container >  
                <Row className="bg-muted justify-contents-center" >
                    <Col xs={3} md={0}></Col>
                    <Col xs={9}md={12}>
                    <Row className="my-2 border-light border border-5 text-center bg-dark p-4" style={{ borderRadius: "30px" }}>
                        <div>
                            <h1>{user.username}'s Profile</h1>
                            <div style={{fontSize: "30px"}}>Are you a Developer: {user.is_developer === "true" ? "yes" : "no"}</div>
                            <div style={{fontSize: "30px"}}>Joined: {user.join_date}</div>   
                            <img src={user.image} style={{width: "100%"}}/>          
                        </div>
                    </Row>    
                
                    <Row className="my-2 border-light border border-5 text-center bg-dark p-4 text-center text-light"style={{borderRadius: "30px"}}>
                    <h2 className="my-2 text-center bg-dark p-4 text-center text-light" style={{borderRadius: "30px"}} >Reviews You've Written:</h2>
                    {user.reviews.length > 0 ? user.reviews.map((review) => <Col  key={review.id} xs={12} className="my-2 text-dark justify-content-center"><ReviewForProfile review={review} /></Col>) : <h3 className="text-center text-light" >You haven't written any reviews yet!</h3>}
                    </Row>
                    </Col>
                   
                </ Row>        
            </ Container>
        </ Container>
    )
}

export default MyProfile;