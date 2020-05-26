import React, { Component } from 'react';
import './styles.css';
import { withFirebase } from '../../context/firebase/index';
import { withAuthentication } from '../../context/session';
import AuthUserContext from '../../context/session';
import logo from '../../assets/logoHeader.png'

import M from "materialize-css";

class Header extends Component {
    // constructor(props) {
    //     super(props);
    // }

    alertLogout = () => {
        alert('Você foi deslogado');
    }

    logout = () => {
        this.props.firebase.doSignOut();
        //this.alertLogout();
        window.location.reload();
    }

    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, { inDuration: 300, outDuration: 225, coverTrigger: false, bellowOrigin: true });
    }

    render() {

        return (
            <AuthUserContext.Consumer>
                {
                    authUser => {
                        if (authUser !== -1 && authUser !== null && authUser.ma !== '') {
                            return (
                                <nav className='header'>{/*row*/}
                                    <div className="nav-wrapper green lighten-1">

                                        <a href="/CovidZone">
                                            <img className='header-logo col s1'
                                                src={logo}
                                                alt="Covid Zone"
                                            />
                                        </a>

                                        <ul className="buttons-list right hide-on-med-and-down" > {/*row*/}


                                            <li className="header-button waves-effect waves-light">{/*col s3*/}

                                                <a
                                                    id="home-page-button"
                                                    className='header-button'
                                                    href="/CovidZone">
                                                    Pagina Principal
                                                </a>
                                            </li>

                                            <li className="header-button waves-effect waves-light">{/*col s3*/}
                                                <a
                                                    id="avaliation-button"
                                                    className='header-button'
                                                    href="/HealthAssesment">
                                                    Avaliação de Saúde
                                                </a>
                                            </li>

                                            <li>{/*col s3*/}
                                                <a
                                                    id='config-button-options'
                                                    className="dropdown-trigger"
                                                    coverTrigger={false}
                                                    href="/UserConfig/UserView"
                                                    data-target="dropdown1"
                                                    onClick={e => {
                                                        const inst = M.Dropdown.getInstance(e.target);
                                                        inst && inst.open();
                                                    }}>
                                                    <i className="material-icons right small">arrow_drop_down</i>
                                                    Configurações
                                                </a>
                                            </li>

                                            {/* Dropdown Configurações */}
                                            <ul
                                                id="dropdown1"
                                                className="dropdown-content">

                                                <li
                                                    className="header-button waves-effect waves-light">
                                                    <a
                                                        id='visualizar-dados-option'
                                                        href="/UserConfig/UserView">
                                                        Vizualizar Dados
                                                    </a>
                                                </li>

                                                <li>
                                                    <a
                                                        id='editar-conta-option'
                                                        href="/UserConfig/EditAccount">
                                                        Editar Conta
                                                    </a>
                                                </li>

                                                <li className="divider"></li>

                                                <li>
                                                    <a
                                                        id='deletar-conta-option'
                                                        href="/UserConfig/DeleteAccount">
                                                        Excluir Conta
                                                    </a>
                                                </li>

                                            </ul>

                                            <li className="header-button waves-effect waves-light">{/*col s3*/}
                                                <a
                                                    id="logout-button"
                                                    className='header-button'
                                                    href="/"
                                                    onClick={this.logout}>
                                                    <i className="header-icon material-icons ">power_settings_new</i>
                                                    Sair
                                                </a>
                                            </li>

                                        </ul>
                                    </div>

                                </nav>

                            )
                        } else {
                            return (
                                <nav className='header'>{/*row*/}
                                    <div className="nav-wrapper green lighten-1">
                                        <a href="/CovidZone">
                                            <img className='header-logo col s1'
                                                src={logo}
                                                alt="Covid Zone"
                                            />
                                        </a>

                                        <ul className="buttons-list right hide-on-med-and-down" > {/*row*/}
                                            <li className="header-button waves-effect waves-light">{/*col s3*/}

                                                <a
                                                    id="login-header-button"
                                                    className='header-button'
                                                    href="/">
                                                    Login
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            )
                        }
                    }
                }
            </AuthUserContext.Consumer>
        );
    }
}
export default withAuthentication(withFirebase(Header));