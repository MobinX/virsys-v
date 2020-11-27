import React from "react";
import "./Auth.css";
import g_img from "./assets/goole-g-ico.svg";
import f_img from "./assets/facebook-f-ico.svg";
import apple_img from "./assets/apple-apple-ico.png"
import { Col, Container, Row, Visible } from "react-grid-system";
import firebase from "firebase/app";
import "firebase/auth";
import { useEffect } from "react";


const firebaseConfig = {
    apiKey: "AIzaSyDz2ZuIY6qUc3ngpBROfScfuHcN6x6qomk",
    authDomain: "virsys.firebaseapp.com",
    databaseURL: "https://virsys.firebaseio.com",
    projectId: "virsys",
    storageBucket: "virsys.appspot.com",
    messagingSenderId: "630930643671",
    appId: "1:630930643671:web:a87ac8690b08ba98a0ee92",
    measurementId: "G-GDH0MD66QG"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}





function Auth() {
   
    function handleClick(e) {
        var provider;
        if(e == "google"){
            provider = new firebase.auth.GoogleAuthProvider();
        }
        else if(e == "facebook"){
            provider = new firebase.auth.FacebookAuthProvider();
        }
        else {

        }
         
        console.log('The link was clicked.');
        console.log(provider);
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            
      

            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
      }
      const data = {
        signOpt: [
            { optImg: g_img, optTxt: "Continue with Google",provider:"google" },
            { optImg: f_img, optTxt: "Continue with Facebook",provider:"facebook" },
            { optImg: apple_img, optTxt: "Continue with  Apple",provider:"apple" },
        ]
    }
    
    return (
        <>

            <div className="auth-root">


                <Visible lg xl xxl>
                    <div className="auth-main-lt">

                    </div>
                </Visible>

                   <div className="auth-main-rt">
                    <h1>Welcome to Virsys</h1>
                    {data.signOpt.map(d =>
                        <div className="auth-btn" onClick={() => handleClick(d.provider)}>
                            <img src={d.optImg} />
                            <p>{d.optTxt}</p>
                        </div>
                    )}
                </div>

            </div>

        </>
    );
}
export default Auth;
