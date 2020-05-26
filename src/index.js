import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Firebase, { FirebaseContext } from './context/firebase';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <FirebaseContext.Provider value={new Firebase()}>
        <Route patch='/' exact={true} component={App} />
      </FirebaseContext.Provider>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

