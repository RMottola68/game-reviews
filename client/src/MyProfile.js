import { Button, Row, Col, Container } from 'react-bootstrap';

function MyProfile({ user }){
    return(
        <Container className="text-center pt-5" style={{ borderRadius: "30px", height: "100vh", width: "100vw"}}>
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
                   
                        
            </ Row>
        </ Container>
    )
}

export default MyProfile;