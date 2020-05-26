import React from 'react';
import Header from '../../../components/Header/Header';
import EditAccountForm from '../../../components/UserConfig/EditAccountForm/EditAccountForm';
import { Redirect } from "react-router-dom";
import AuthUserContext from '../../../context/session';
import { withFirebase } from '../../../context/firebase/index';
import { withAuthentication } from '../../../context/session';
import './editAccountPage.css';


function EditAccountPage() {
    return (
        <AuthUserContext.Consumer>
            {
                authUser => {
                    if (authUser !== -1 && authUser !== null && authUser.ma !== '') {
                        return (
                            <div id='editar-conta-page'>
                                <Header/>
                                <EditAccountForm />
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

export default withAuthentication(withFirebase(EditAccountPage));