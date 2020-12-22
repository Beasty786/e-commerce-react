import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAjD6N6bslTOa6dFuWSl0iWBWVoZNWuyPU",
    authDomain: "crwn-db-e9f2b.firebaseapp.com",
    projectId: "crwn-db-e9f2b",
    storageBucket: "crwn-db-e9f2b.appspot.com",
    messagingSenderId: "516085850049",
    appId: "1:516085850049:web:de8fdd3728bd0ba6c89940",
    measurementId: "G-XQMBDQD6V1"
};

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName , email} = userAuth;
        const createdAt  = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console('error creating user ', error.message);
        }
    }

    console.log(snapShot);
    return userRef;

} 


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup( provider );

export default firebase;