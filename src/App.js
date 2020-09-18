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
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

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
                </Nav>
              </Collapse>
            </Navbar>
            <div>
              <Switch>
                <Route path={'/'} exact component={Home}/>
                <Route path={'/courses'} exact component={Courses}/>
                <Route path={'/scores'} exact component={Scores}/>
                <Route component={PageNotFound}/>
              </Switch>
            </div>
          </Router>
        </div>
    );
  }
}

export default App;
