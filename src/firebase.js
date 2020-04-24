import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBvWyz6LjZfodtF_PM3i8-98Y5WfN1uShc",
    authDomain: "fun-food-friends-17fe2.firebaseapp.com",
    databaseURL: "https://fun-food-friends-17fe2.firebaseio.com",
    projectId: "fun-food-friends-17fe2",
    storageBucket: "fun-food-friends-17fe2.appspot.com",
    messagingSenderId: "144750278413"
};
firebase.initializeApp(config);
export default firebase;