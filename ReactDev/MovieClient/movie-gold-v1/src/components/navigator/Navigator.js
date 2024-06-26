import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './Navigator.css'
const Navigator = () => {
    const navigator = useNavigate();

    const handleLogoutClick = () => {
        const confirmLogout = window.confirm("Are you sure you want to exit?");
        if (confirmLogout) {
            // Perform logout action here
            console.log("User confirmed logout");
            localStorage.clear();
            navigator('/');
        } else {
            console.log("User canceled logout");
        }
    };

    const handleNavigation = (selected) => {

        if (selected === '') {
            handleLogoutClick();
        }
        else {
            console.log(selected);
            navigator(selected);
        }

       
    

    }

    


    return <SideNav
    onSelect={handleNavigation}
    className="sidenav"
    >
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        
        <NavItem eventKey="dressingroom">
            <NavIcon>
                <i className="fa-solid fa-person-booth" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                Dressing Room
            </NavText>
            
        </NavItem>
        
        <NavItem eventKey="ThreeDDemo">
            <NavIcon>
                <i className="fa-solid fa-person-running" style={{ fontSize: '1.5em' }} />
                
            </NavIcon>
            <NavText>
                3D Demo
            </NavText>
        </NavItem>

        <NavItem eventKey="airecommendation">
            <NavIcon>
                <i className="fa-solid fa-robot" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                AI recommendation
            </NavText>
        </NavItem>

        <NavItem eventKey="">
            <NavIcon>
                <i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                Logout
            </NavText>
        </NavItem>
        </SideNav.Nav>
    </SideNav>



}

export default Navigator