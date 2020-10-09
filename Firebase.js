import firebase from 'firebase';
import {call} from 'react-native-reanimated';

class Firebase {
    constructor(){
        this.init()
        this.checkAuth()
    }


    
    init = () => {

        if (!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyCfGDqUFFzoGCkbpfNAUmfZOOr9VQ_bjik",
                authDomain: "chatapp-30894.firebaseapp.com",
                databaseURL: "https://chatapp-30894.firebaseio.com",
                projectId: "chatapp-30894",
                storageBucket: "chatapp-30894.appspot.com",
                messagingSenderId: "402810632220",
                appId: "1:402810632220:web:a68b0d57d8ecf7567047d9",
                measurementId: "G-WBMVMH84NM"
            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user ) {
                firebase.auth().signInAnonymously();

            }
        });

    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text, 
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }

            this.db.push(message)
        });

    };

    parse = message => {
        const {user, text, timestamp} = message.val()
        const {key: _id} = message
        const createdAt = new Date(timestamp)

        return{
            _id, 
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off()
    }

    get db() {
        return firebase.database().ref('messages');
    }

    get uid() {
        return(firebase.auth().currentUser || {}).uid
    }

}

export default new Firebase();