import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CovidZonePage from './pages/CovidZonePage/CovidZonePage';
import HealthAssesmentPage from './pages/HealthAssesmentPage/HealthAssesmentPage';
import UserViewPage from './pages/UserConfig/UserViewPage/UserViewPage';
import DeleteAccount from './pages/UserConfig/DeleteAccount';
import EditAccountPage from './pages/UserConfig/EditAccountPage/EditAccountPage';

//import PrivateRoute from './PrivateRoute';

const Routes = ({ authUser }) => (
    <div>{authUser ? <RoutesAuth /> : <RoutesNonAuth />}</div>
  );

const RoutesAuth = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
    </Switch>
    </BrowserRouter>
);

const RoutesNonAuth = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route path='/CovidZone' component={CovidZonePage} />           
        <Route path='/HealthAssesment' component={HealthAssesmentPage} />
        <Route path='/UserConfig/UserView' component={UserViewPage} />
        <Route path='/UserConfig/EditAccount' component={EditAccountPage} />
        <Route path='/UserConfig/DeleteAccount' component={DeleteAccount} />
    </Switch>        
    </BrowserRouter>
);
/*
function Routes() {

    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <PrivateRoute path='/CovidZone' component={CovidZonePage} />           
                    <PrivateRoute path='/HealthAssesment' component={HealthAssesmentPage} />
                    <PrivateRoute path='/UserConfig/UserView' component={UserViewPage} />
                    <PrivateRoute path='/UserConfig/EditAccount' component={EditAccountPage} />
                    <PrivateRoute path='/UserConfig/DeleteAccount' component={DeleteAccount} />
                </Switch>        
            </BrowserRouter>
    );
}
*/
export default Routes;