import React, { Component } from 'react';
import './global.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Route } from 'react-router-dom';

import { FirebaseContext } from './context/firebase';
import AuthUserContext from './context/session';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CovidZonePage from './pages/CovidZonePage/CovidZonePage';
import HealthAssesmentPage from './pages/HealthAssesmentPage/HealthAssesmentPage';
import UserViewPage from './pages/UserConfig/UserViewPage/UserViewPage';
import DeleteAccount from './pages/UserConfig/DeleteAccount';
import EditAccountPage from './pages/UserConfig/EditAccountPage/EditAccountPage';

const AppComponent = () => (
  <div>
    <FirebaseContext.Consumer>
      {firebase => <App firebase={firebase} />}
    </FirebaseContext.Consumer>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      authUser: -1,
    };
  }


  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route path='/CovidZone' component={CovidZonePage} />
        <Route path='/HealthAssesment' component={HealthAssesmentPage} />
        <Route path='/UserConfig/UserView' component={UserViewPage} />
        <Route path='/UserConfig/EditAccount' component={EditAccountPage} />
        <Route path='/UserConfig/DeleteAccount' component={DeleteAccount} />
      </AuthUserContext.Provider>
    );
  }
}

export default AppComponent;

export {App};
