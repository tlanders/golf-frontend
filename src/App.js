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
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Scores from "./pages/Scores";
import {BrowserRouter as Router, Route} from "react-router-dom";

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
          <Router>
            <Navbar color="light" light expand="md" className={"golf-navbar"}>
              <NavbarBrand href="/">My Golf Scores</NavbarBrand>
              <NavbarToggler onClick={this.toggle}/>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="golf-nav" navbar>
                  <NavItem>
                    <NavLink href="/"><i className="material-icons golf-nav">home</i> Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/courses"><i className="material-icons golf-nav">golf_course</i> Courses</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/scores"><i className="material-icons golf-nav">create</i> Scores</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            <div>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/courses'} exact component={Courses}/>
              <Route path={'/scores'} exact component={Scores}/>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
