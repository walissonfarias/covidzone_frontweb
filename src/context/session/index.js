import React from 'react';
import { withFirebase } from '../firebase';

const AuthUserContext = React.createContext(null);

export const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: JSON.parse(localStorage.getItem('authUser')),
      };
      console.log('auth loaded: ', this.state.authUser);
    }

    componentDidMount() {
      this.listener = this.props.firebase.onAuthUserListener(
        (authUser) => {
          // não sei se precisa salvar isso..
          localStorage.setItem('authUser', JSON.stringify(authUser));
          console.log('auth saved: ', authUser);
          this.setState({ authUser });
        },
        () => {
          localStorage.removeItem('authUser');
          this.setState({ authUser: null });
        }
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default AuthUserContext;
