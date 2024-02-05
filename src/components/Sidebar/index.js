/*
 * @Description: 
 * @Author: Ian
 * @Date: 2024-02-05 10:51:29
 * @LastEditTime: 2024-02-05 12:55:08
 * @LastEditors: Ian
 */
import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarWrapper,SideBtnWrap} from './SidebarElements';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const Sidebar = ({isOpen, toggle, isLoggedIn}) => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/signin');
      }
    
      const handleLogout = () => {
        // Clear or remove items from localStorage
        localStorage.setItem('loggedIn', 'false');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.reload();
            console.log("Logout successful");
        // Optionally, you can redirect to the sign-in page or perform other actions
      };
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick ={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover' onClick ={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services' onClick ={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='signup' onClick ={toggle}>
                        Sign In
                    </SidebarLink>

                </SidebarMenu>
                <SideBtnWrap>
                    {!isLoggedIn ? (
                    <Button  color="success" onClick={handleLogin}>
                    Login
                </Button>
                ) : (
                    <Button  color="success" onClick={handleLogout}>
                    Logout
                </Button>
                )}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
