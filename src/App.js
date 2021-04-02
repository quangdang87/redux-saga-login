import React, {Component} from "react";
import {connect} from "react-redux";
import {LOGIN_REQUEST, LOGOUT} from "./actions/actionTypes";
import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.props.login}>Login</button>
          <button onClick={this.props.logout}>Logout</button>
        </div>
        <p>status: {this.props.status}</p>
        <p>token: {this.props.token || ""}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.login.token,
    status: state.login.status,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: () =>
      dispatch({type: LOGIN_REQUEST, user: "NoriSte", password: "password"}),
    logout: () => dispatch({type: LOGOUT}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
