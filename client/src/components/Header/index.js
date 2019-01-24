import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  logout = () => {
    localStorage.removeItem("meal_planner_token");
    return this.props.logout();
  };
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Link to="/">reactstrap</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Docs
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {!this.props.logged_in ? (
                <NavItem>
                  <Link className="nav-link" to="/login/">
                    Login
                  </Link>
                </NavItem>
              ) : (
                <NavItem>
                  <Link className="nav-link" to="/" onClick={this.logout}>
                    Logout
                  </Link>
                </NavItem>
              )}
              {!this.props.logged_in ? (
                <NavItem>
                  <Link className="nav-link" to="/register/">
                    Register
                  </Link>
                </NavItem>
              ) : (
                <NavItem>
                  <Link
                    className="nav-link"
                    to={`/dashboard/${this.props.current_user.id}`}
                  >
                    Dashboard
                  </Link>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    logged_in: state.authReducer.logged_in,
    current_user: state.authReducer.current_user
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(Header);
