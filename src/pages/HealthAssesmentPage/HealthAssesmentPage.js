import React, { Component } from 'react';
import HealthAssesment from '../../components/HealthAssesment/HealthAssesment';
import AuthUserContext from '../../context/session';
import { withFirebase } from '../../context/firebase/index';
import { withAuthentication } from '../../context/session';
import { Redirect } from "react-router-dom";
import Header from '../../components/Header/Header';

class HealthAssesmentPage extends Component {
    // constructor(props) {
    //     super(props);
    // }


    render() {

        return (
            <AuthUserContext.Consumer>
                {
                    authUser => {
                        if (authUser !== -1 && authUser !== null && authUser.ma !== '') {
                            return (
                                <>
                                    <Header />
                                    <HealthAssesment />

                                </>
                            )
                        } else {
                            return (
                                <Redirect to='/'/>
                            )
                        }
                    }

                }
            </AuthUserContext.Consumer>
        )
    }
}

export default withAuthentication(withFirebase(HealthAssesmentPage));
