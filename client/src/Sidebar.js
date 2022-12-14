import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from 'cdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Sidebar({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" })
        .then((r) => {
            if (r.ok) {
            setUser(null);
            }
        });
    }
    return (
    <div className="sidebar-btn-wrapper"  style={{height: "100vh", position: "fixed"}}>
        <CDBSidebar defaultOpentextColor="#fff" backgroundColor="#333" >
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                <a href="/home" className="text-decoration-none" style={{ color: 'inherit' }}>
                    Welcome,
                    < br/>
                    {user.username}!
                </a>
            </CDBSidebarHeader>
            
            <CDBSidebarContent className="sidebar-content" >
                <CDBSidebarMenu  >
                    <Row>
                        <NavLink to="/home"   className="d-flex align-items-center">
                            
                            <Col className="text-center "><CDBSidebarMenuItem icon="home" ></CDBSidebarMenuItem></Col>
                            <Col className="text-center "><Button className="" variant="outline-light">Home</Button></Col>
                            
                        </NavLink>
                    </Row>

                    <Row>
                        <NavLink to="/games"   className="d-flex align-items-center">
                            
                            <Col className="text-center "><CDBSidebarMenuItem icon="columns" ></CDBSidebarMenuItem></Col>
                            <Col className="text-center "><Button className="" variant="outline-light">Games</Button></Col>
                            
                        </NavLink>
                    </Row>
                    
                    
                    <Row className="d-flex align-items-center">
                        <NavLink to="/reviews"  className="d-flex align-items-center">
                            
                            <Col className="text-center "><CDBSidebarMenuItem icon="table" ></CDBSidebarMenuItem></Col>
                            <Col className="text-center "><Button variant="outline-light" >Reviews</Button></Col>
                            
                        </NavLink>
                    </Row>

                    <Row >
                        <NavLink to="/myprofile"  className="d-flex align-items-center">
                            
                            <Col className="text-center "><CDBSidebarMenuItem icon="user"></CDBSidebarMenuItem></Col>
                            <Col className="text-center "><Button variant="outline-light">My Profile</Button></Col>
                            
                        </NavLink>
                    </Row>
                    
                    <Row >
                        <NavLink to="/addgame"  className="d-flex align-items-center">
                            
                            <Col className="text-center "><CDBSidebarMenuItem icon="plus"></CDBSidebarMenuItem></Col>
                            <Col className="text-center "><Button variant="outline-light">Add a Game</Button></Col>
                            
                        </NavLink>
                    </Row>

                    <Row >
                        <NavLink to="/addreview"  className="d-flex align-items-center">
                            
                            <Col className="text-center "><CDBSidebarMenuItem icon="plus"></CDBSidebarMenuItem></Col>
                            <Col className="text-center "><Button variant="outline-light">Add a Review</Button></Col>
                            
                        </NavLink>
                    </Row>

                </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>       
                <Row>       
                    <NavLink to="/login" className=" d-flex text-light align-items-center text-decoration-none">
                        <Col className="">
                            <CDBSidebarMenuItem icon="power-off"  onClick={handleLogoutClick}>
                                <Button className="btn-danger " onClick={handleLogoutClick}>Logout</Button>
                            </CDBSidebarMenuItem>
                        </Col>
                    </NavLink>   
                </Row>
                            
                
            </CDBSidebarFooter>
        </CDBSidebar>
    </div>
    );
};

export default Sidebar;