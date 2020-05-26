import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { Redirect } from "react-router-dom";

import AuthUserContext from '../../context/session';
import { withFirebase } from '../../context/firebase/index';
import { withAuthentication } from '../../context/session';

import './styles.css';
import '../../global.css';

import logo from '../../assets/logoHeader.png';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }


  onSubmit(event) {
    this.props.firebase
      .doSignInWithEmailAndPassword(this.state.email, this.state.password)
      .then(authUser => {
        this.setState({ ...this.state });
        let uId = authUser.user.uid;
        this.setState({ isLoggedIn: true });
      })
      .catch(error => {
        console.log(error);
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    return (
      <AuthUserContext.Consumer>
        {
          authUser => {
            if (authUser !== -1 && authUser !== null && authUser.ma !== '') {
              return (
                <Redirect to='/CovidZone' />
              );
            } else {
              return (
                <div className="login-background">
                  <div className="login-container">

                    <section className="form">

                      <img src={logo} alt="CovidZone" className="logo-img" />
                      <div className='form' onSubmit={this.onSubmit.bind(this)}>
                        <form >
                          <h1>Faça seu login</h1>

                          <input
                            placeholder="E-mail"
                            name="email"
                            id="emailField"
                            onChange={this.onChange}
                            required />
                          <input
                            placeholder="Senha"
                            type="password"
                            name="password"
                            onChange={this.onChange}
                            id="passwordField"
                            required
                          />

                          <button
                            className="button"
                            type="submit"
                            id="submit-button"
                          >
                            Entrar
                          </button>

                          <Link
                            id="user-register-button"
                            className="back-link"
                            to='/register'
                          >
                            <FiLogIn
                              size={16}
                              color="#FF691F"
                            />
                            Não tenho cadastro
                          </Link>

                          <Link
                            className="back-link"
                            to='/CovidZone'
                          >
                            <FiLogIn
                              size={16}
                              color="#FF691F"
                            />
                            Continuar sem cadastro
                          </Link>
                        </form>
                      </div>
                    </section>

                  </div>
                </div>
              );
            }
          }
        }
      </AuthUserContext.Consumer>
    );
  }
}
export default withAuthentication(withFirebase(Login));