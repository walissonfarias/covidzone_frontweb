import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDelw_3_s7T15Iekx1rCI5OX4idEnWv7dA",
  authDomain: "covidzone-68c34.firebaseapp.com",
  databaseURL: "https://covidzone-68c34.firebaseio.com",
  projectId: "covidzone-68c34",
  storageBucket: "covidzone-68c34.appspot.com",
  messagingSenderId: "206147578918",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    /* Firebase APIs */
    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        next(authUser);
      } else {
        fallback();
      }
    });
}

export default Firebase;
