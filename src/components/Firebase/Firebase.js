import FirebaseContext from "./context"
import app from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCCt7kAJPrg1H67xLl8cxJblFChzFAAN1w",
    authDomain: "project-oddaj-rzeczy.firebaseapp.com",
    databaseURL: "https://project-oddaj-rzeczy.firebaseio.com",
    projectId: "project-oddaj-rzeczy",
    storageBucket: "",
    messagingSenderId: "568857922158",
    appId: "1:568857922158:web:c9f8a0fa6d8f4d3ffb347f"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth()
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
}
export default Firebase;

export {FirebaseContext};