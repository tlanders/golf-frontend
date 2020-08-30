import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Collapse,
  NavItem,
  NavbarText,
    NavLink,
    NavbarToggler
} from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
        <div className="App">
          <Navbar color="light" light expand="md" className={"golf-navbar"}>
            <NavbarBrand href="/">My Golf Scores</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/courses">Courses</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/scores">Scores</NavLink>
                </NavItem>
                {/*<UncontrolledDropdown nav inNavbar>*/}
                {/*  <DropdownToggle nav caret>*/}
                {/*    Options*/}
                {/*  </DropdownToggle>*/}
                {/*  <DropdownMenu right>*/}
                {/*    <DropdownItem>*/}
                {/*      Option 1*/}
                {/*    </DropdownItem>*/}
                {/*    <DropdownItem>*/}
                {/*      Option 2*/}
                {/*    </DropdownItem>*/}
                {/*    <DropdownItem divider />*/}
                {/*    <DropdownItem>*/}
                {/*      Reset*/}
                {/*    </DropdownItem>*/}
                {/*  </DropdownMenu>*/}
                {/*</UncontrolledDropdown>*/}
              </Nav>
              {/*<NavbarText>Simple Text</NavbarText>*/}
            </Collapse>
          </Navbar>
        </div>
    );
  }
}

export default App;
