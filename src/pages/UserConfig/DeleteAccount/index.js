import React from 'react';
import Header from '../../../components/Header/Header';
import { Redirect } from "react-router-dom";
import AuthUserContext from '../../../context/session';
import { withFirebase } from '../../../context/firebase/index';
import { withAuthentication } from '../../../context/session';

import './styles.css';


function DeleteAccount() {

    return (
        <AuthUserContext.Consumer>
            {
                authUser => {
                    if (authUser !== -1 && authUser !== null && authUser.ma !== '') {
                        return (
                            <div id='deletar-conta-page'>
                                <Header/>
                                <section>
                                    <h1>Excluir Conta</h1>

                                    <p>Deseja mesmo excluir sua conta? Essa opção é irreversível.</p>

                                    <a
                                        className='button-user-option waves-effect waves-light btn orange darken-3'
                                        href="/"
                                        id="botaoCancelarDeletar">
                                        Cancelar
                                    </a>

                                    <a
                                        className='button-user-option waves-effect waves-light btn orange darken-3'
                                        href="/"
                                        id="botaoDeletar">
                                        Deletar
                                    </a>
                                </section>
                            </div>
                        );
                    } else{
                        return (
                            <Redirect to='/' />
                        );
                    }
                }
            }
        </AuthUserContext.Consumer>
        );
}

export default withAuthentication(withFirebase(DeleteAccount));