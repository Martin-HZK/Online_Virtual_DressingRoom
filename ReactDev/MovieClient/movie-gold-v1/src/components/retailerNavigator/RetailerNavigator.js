import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './RetailerNavigator.css'
const RetailerNavigator = () => {
    const navigator = useNavigate();

    const handleLogoutClick = () => {
        const confirmLogout = window.confirm("Are you sure you want to exit?");
        if (confirmLogout) {
            // Perform logout action here
            console.log("User confirmed logout");
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
    <SideNav.Nav defaultSelected="/retailer/home">
        <NavItem eventKey="/retailer/home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="/retailer/uploadimage">
            <NavIcon>
                <i className="fa-solid fa-shop" style={{ fontSize: '1.5em' }}></i>
                {/* <i className="fa-solid fa-image-portrait" style={{ fontSize: '1.5em' }} /> */}
            </NavIcon>
            <NavText>
                Upload Image
            </NavText>
        </NavItem>
        {/* <NavItem eventKey="uploadimage">
            <NavIcon>
                <i className="fa-solid fa-image-portrait" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                Upload Image
            </NavText>
        </NavItem> */}
        {/* <NavItem eventKey="bodyfeature">
            <NavIcon>
                <i className="fa fa-fw fa-male" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Body Feature
            </NavText>
        </NavItem>
        
        <NavItem eventKey="dressingroom">
            <NavIcon>
                <i className="fa-solid fa-person-booth" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                Dressing Room
            </NavText>
        </NavItem> */}
        {/* <NavItem eventKey="shoppingcart">
            <NavIcon>
                <i className="fa fa-fw fa-shopping-cart" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                Shopping Cart
            </NavText>
        </NavItem> */}
        {/* <NavItem eventKey="airecommendation">
            <NavIcon>
                <i className="fa-solid fa-robot" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                AI recommendation
            </NavText>
        </NavItem> */}

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

export default RetailerNavigator