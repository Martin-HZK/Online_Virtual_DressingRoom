import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './Navigator.css'
const Navigator = () => {
  return <SideNav
    onSelect={(selected) => {
        console.log(selected)
    }}
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
        <NavItem eventKey="upload_image">
            <NavIcon>
                <i className="fa-solid fa-image-portrait" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                Upload Image
            </NavText>
        </NavItem>
        <NavItem eventKey="modify_body">
            <NavIcon>
                <i className="fa fa-fw fa-male" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Body Feature
            </NavText>
        </NavItem>
        
        <NavItem eventKey="change_clothes">
            <NavIcon>
                <i className="fa-solid fa-person-booth" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                Dressing Room
            </NavText>
        </NavItem>
        <NavItem eventKey="shopping_cart">
            <NavIcon>
                <i className="fa fa-fw fa-shopping-cart" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                Shopping Cart
            </NavText>
        </NavItem>
        <NavItem eventKey="AIrecommendation">
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