import { Row, Container, Col } from 'react-bootstrap';
import Welcome from "./assets/welcome.png"


function Landing() {

    return (      
        <Container className="text-center" style={{ height: "100vh", paddingTop: "150px"}}>
                <Row  >
                    <Col xs={2} md={0}></Col>
                    <Col xs={10}md={12} className="text-light bg-dark border border-light border-5 justify-content-center" style={{ borderRadius: "30px"}}>
                        <img src={Welcome} style={{width: "100%"}}/>
                        <h1>A discussion forum about all things gaming!</h1>
                        <br />
                        <h1>Console or PC</ h1>
                        <br />
                        <h1> TCG or miniatures</h1>
                        <br />
                        <h1>We want to hear what you have to say!</h1>
                        <br />
                        <h1>There's no game too obscure</h1>
                        <br />
                        
                    </Col>
                </Row>
        </Container>      
            
    );
}

export default Landing;
