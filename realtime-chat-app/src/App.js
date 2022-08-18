import './App.css';
import { Container } from './components/Container/Container';
import { SignIn } from './components/SignIn/SignIn';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth'

firebase.initializeApp({
    apiKey: "AIzaSyBzs9qhrUZV46tCIpkPgV7w92uT-kTwqrk",
    authDomain: "realtimechatapp-f563b.firebaseapp.com",
    projectId: "realtimechatapp-f563b",
    storageBucket: "realtimechatapp-f563b.appspot.com",
    messagingSenderId: "418244284018",
    appId: "1:418244284018:web:028468b01388e066eefceb"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
}
const signOut = () => {
    if(auth.currentUser){
        auth.signOut();
    }
}
function App() {
    const [user] = useAuthState(auth);
    return (
        <>
            <h1 className='text-center mt-3'>Realtime chat app</h1>
            {user ? <Container signOut = {signOut} firestore= {firestore} user = {user} firebase = {firebase}/> : <SignIn signInWithGoogle = {signInWithGoogle}/> }
        </>
    );
}

export default App;
