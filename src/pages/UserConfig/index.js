import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi'
import { Redirect } from "react-router-dom";
import './styles.css';

import logo from '../../assets/logo.png'
import AuthUserContext from '../../context/session';

export default function UserConfig() {
    return (
        <AuthUserContext.Consumer>
        {
            authUser => {
                if (authUser !== -1 && authUser !== null && authUser.ma !== '') {
                    return (
                            <div className="covidzone-container">
                            <header>
                                <Link><img src={logo} alt="Covid Zone" /></Link>

                                <Link className="button" to="/HealthAssesment">Avaliação de Saúde</Link>
                                <Link className="button" to="/UserConfig">Configurações</Link>
                                <button type="button" id="logout"> <FiPower size={18} color="#FF691F" /></button>
                            </header>
                            <h1>Configurações de Usuario</h1>
                            </div>
                    );
                } else {
                    return (
                        <Redirect to='/' />
                    );
                }
            }
        }
        </AuthUserContext.Consumer>
    );

}