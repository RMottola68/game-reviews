import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { Container, Row, Col, Form, Button, Navbar} from 'react-bootstrap';


function Navigation({ user, setUser }) {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }


    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    return(
        
        <Navbar className="p-0 m-0" fixed="top">
            <Row className="p-0 m-0 h" style={{borderBottom:"solid black 2px",background:"rgb(255,0,0)", width: "100%"}}>
                <Nav 
                
                activeKey="/users"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                    <Col>
                        <Nav.Item className="p-0 mx-0 ">
                            <img src={RMRLogo} style={{width:'auto', height: 150}} />
                        </Nav.Item>
                    </Col>

                    <Col className="mt-3 d-flex" style={{color:"white"}}>
                        <Nav.Item className="">

                          <h2 className="d-flex justify-content-center">License Plateholder</h2>
                          <div className="d-flex justify-content-center">

                            <Button className="mx-1 btn-success" >
                              <Link className="text-decoration-none  text-white" to="games">Games</Link>
                            </Button>

                            <Button className="mx-1 btn-success" >
                              <Link className="text-decoration-none  text-white" to="profile">My Profile</Link>
                                
                            </Button>
                        
                            <Button className="mx-1 btn-success" >
                                <Link  className="text-decoration-none  text-white" to="reviews">Search Reviews</Link>
                            </Button>



                            <Button className="mx-1 btn-success" >
                                <Link  className="text-decoration-none  text-white" to="newreview">Review a Game</Link>
                            </Button>
                          </div>
                        </Nav.Item>
                    </Col>
                    
                    <Col className='my-1 '>
                      <Nav.Item className="d-flex justify-content-end">
                        <Link  className="text-decoration-none  text-white" to="profile">
                          <img src={user.image} style={{width: 'auto', height: 125, borderRadius: "30px"}}></img>
                        </Link>
                        <Button className="btn-success my-5 mx-1" onClick={handleLogoutClick}>Logout</Button>
                        <Button className="btn-success my-5" onClick={() => console.log('clicked')}>
                        <Link  className="text-decoration-none  text-white" to="profile">My Profile</Link>
                          </Button>
                      </Nav.Item>
                    </Col>
                    
                </Nav>
                <Button className="btn-success p-3" style={{display: visible ? 'inline' : 'none', position:"fixed",width:"fit-content",height:"fit-content",left:"90%",bottom:"40px",fontSize:"10px",zIndex:"99",cursor:"pointer", color:"red",border:"red"}}>
                <span className="material-symbols-outlined" onClick={scrollToTop} style={{height:"fit-content"}}><FontAwesomeIcon icon={faChevronUp} className="fas fa-3x" /></span>
                </Button>
            </Row>
        </Navbar >
        
        
  
    )
}



export default Navigation;