import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Sidebar({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
            setUser(null);
            }
        });
    }
    return (
    <div className="sidebar-btn-wrapper fixed-top" style={{height: "100vh"}}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                    Welcome, {user.username}!
                </a>
            </CDBSidebarHeader>
            
            <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>
                    <NavLink exact to="/games" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="columns">Games</CDBSidebarMenuItem>
                    </NavLink>

                    <NavLink exact to="/reviews" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="table">Reviews</CDBSidebarMenuItem>
                    </NavLink>

                    <NavLink exact to="/myprofile" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="user">My Profile</CDBSidebarMenuItem>
                    </NavLink>
                    
                    <NavLink exact to="/addgame" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="chart-line">Add a Game</CDBSidebarMenuItem>
                    </NavLink>

                    <NavLink exact to="/addreview" activeClassName="activeClicked">
                        <CDBSidebarMenuItem icon="chart-line">Add a Review</CDBSidebarMenuItem>
                    </NavLink>

                </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>       
                    
                <CDBSidebarMenuItem icon="power-off" activeClassName="activeClicked" onClick={handleLogoutClick}>
                    
                    <Button exact className="btn-danger m-0" onClick={handleLogoutClick}>Logout</Button>
                </CDBSidebarMenuItem>                    
                
            </CDBSidebarFooter>
        </CDBSidebar>
    </div>
    );
};

export default Sidebar;