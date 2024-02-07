import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Navigator = () => {
  return <SideNav
    onSelect={(selected) => {
        console.log(selected)
    }}
    >

    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem>
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.5em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        </SideNav.Nav>
    </SideNav>



}

export default Navigator