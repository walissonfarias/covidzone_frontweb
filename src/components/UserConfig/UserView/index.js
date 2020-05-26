import React from 'react';
import { Redirect } from 'react-router-dom';

import AuthUserContext from '../../../context/session';
import { withFirebase } from '../../../context/firebase/index';
import { withAuthentication } from '../../../context/session';

import './styles.css';


function UserView() {
    return (
        <AuthUserContext.Consumer>
            {
                authUser => {
                    if (authUser !== -1 && authUser !== null && authUser.ma !== '') {
                        return (
                            <div
                                id='userview-page'
                                className="userview-container"
                            >
                                <div className="user-view-container">
                                    <section>
                                        <h1>Dados do Usuario</h1>
                                        <div>
                                            <p>Nome:</p>
                                            <p>Email:</p>
                                            <p>Caso:</p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <Redirect to='/' />
                        )
                    }
                }
            }
        </AuthUserContext.Consumer>
    );

}

export default withAuthentication(withFirebase(UserView));