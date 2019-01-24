import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      search: ""
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  logout = () => {
    localStorage.removeItem("meal_planner_token");
    return this.props.logout();
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  keyDown = e => {
    if (e.keyCode === 13) {
      this.searchRecipes(this.state.search);
    } else {
      return;
    }
  };
  searchRecipes = search => {
    alert(search);
  };
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Link to="/">Meal Planner</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {/*finish adding search functionality once recipes seeded*/}
                <Input
                  type="text"
                  placeholder="search"
                  name="search"
                  onChange={this.changeHandler}
                  value={this.state.search}
                  onKeyDown={this.keyDown}
                  onSubmit={this.searchRecipes}
                />
              </NavItem>
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
