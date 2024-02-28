import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './Navigator.css'
const Navigator = () => {
    const navigator = useNavigate();



    return <SideNav
    onSelect={(selected) => {
        console.log(selected);
        navigator(selected);

    }}
    className="sidenav"
    >
        {/* 用户信息展示区域 */}
      {/* <div className="user-profile">
        <img src="user-avatar.jpg" alt="User Avatar" className="user-avatar" />
        <span className="user-name">John Doe</span>
        <button className="logout-button" onClick={() => console.log('Logout')}>
          Logout
        </button>
      </div> */}

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
        <NavItem eventKey="uploadimage">
            <NavIcon>
                <i className="fa-solid fa-image-portrait" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                Upload Image
            </NavText>
        </NavItem>
        <NavItem eventKey="bodyfeature">
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
        </NavItem>
        <NavItem eventKey="shoppingcart">
            <NavIcon>
                <i className="fa fa-fw fa-shopping-cart" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                Shopping Cart
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
        </SideNav.Nav>
    </SideNav>



}

export default Navigator