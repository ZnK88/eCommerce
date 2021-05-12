import React, { Component } from "react";
import { Box, Button } from "@material-ui/core";
import axios from "axios";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const { history } = this.props;
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.token);
      history.push("/");
      console.log(response);
    } catch (error) {
      this.setState({
        errors: error.response.data.msg,
      });
    }
  }

  render() {
    return (
      <>
        <h4 className="inscriptionTitle">Connexion</h4>
        <Box component="div" className="boxForm">
          <form className="formBody" onSubmit={this.handleSubmit}>
            <input
              className="formContent"
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <br />
            <input
              className="formContent"
              type="password"
              name="password"
              placeholder="Mot de passe"
              minLength="8"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <br />
            <Button
              className="btn-submit"
              variant="contained"
              color="primary"
              type="submit"
            >
              Connexion
            </Button>
            <br />
            <span className="errorMessage">{this.state.errors}</span>
          </form>
        </Box>
      </>
    );
  }
}

export default Login;
