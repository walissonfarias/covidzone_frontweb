import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Redirect } from "react-router-dom";
import { withAuthentication } from '../../context/session';
import { withFirebase } from '../../context/firebase';



import './styles.css';

import logo from '../../assets/logo.png';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            situation: '',
            lat: '',
            lng: '',
            isRegistered: false,
            error: null,
        }
    }

    /*    async function handleSubmit(e) {
            e.preventDefault();
            const response = await api.post('/register', {
                name,
                email,
                password,
                situation,
                latitude,
                longitude,
            });
            console.log(response.data);
        }
    */


    onSubmit(e) {


        if (this.state.situation !== '') {
            this.props.firebase
                .doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(authUser => {
                    this.setState({ ...this.state });
                    let state = this.state;
                    state['isRegistered'] = true;
                    this.setState({ state });
                })
                .catch(error => {
                    this.setState({ error });
                });
        } else {
            alert('Você deve selecionar uma situação de saúde');
        }
        e.preventDefault();
    };

    onChange = event => {
        this.getCoordinates();
        console.log({ [event.target.name]: event.target.value });
        this.setState({ [event.target.name]: event.target.value });
    };

    getCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                this.setState({
                    lat: latitude,
                    lng: longitude,
                })
            },
            (err) => {
                console.log(err);
            }
        );
    }

    render() {

        if (this.state.isRegistered === true) {
            return <Redirect to='/covidZone' />
        }

        return (
            <div
                id='register-page'
                className='register-container'
            >
                <div className="content">
                    <section>
                        <img src={logo} alt="Covid Zone" />
                        <h1>Cadastro</h1>
                        <p>Faça seu cadastro, entre na plataforma para se informar e nos ajude a monitorar os casos de covid-19.</p>

                        <Link className="back-link" to='/'>
                            <FiArrowLeft
                                size={16}
                                color="#FF691F"
                            />
                            Já sou cadastrado
                        </Link>

                    </section>

                    <div
                        className="form"
                        onSubmit={this.onSubmit.bind(this)}
                    >
                        <form>
                            <input

                                placeholder="Seu nome"
                                required
                                name='name'
                                id="nameField"
                                onChange={this.onChange}
                            />

                            <input
                                type="email"
                                placeholder="E-mail"
                                required
                                name='email'
                                id="emailField"
                                onChange={this.onChange}
                            />

                            <input
                                type="password"
                                placeholder="Senha"
                                required
                                name='password'
                                id="passwordField"
                                onChange={this.onChange}
                            />

                            <select
                                id='selection-form'
                                className="browser-default"
                                name='situation'
                                onChange={this.onChange}
                            >
                                <option value="" disabled selected>Situação de Saúde</option>
                                <option id='saudavel-option' value='saudavel'>Saudavel</option>
                                <option id='suspeito-option' value='suspeito'>Suspeito</option>
                                <option id='confirmado-option' value='confirmado'>Confirmado</option>
                            </select>

                            <button
                                id='submit-button'
                                className="button"
                                type="submit">
                                Cadastrar
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withAuthentication(withFirebase(Register));