import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box";
import { IconButton, Typography } from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";
import logo from "../../assets/logo.png";
import "./navbar.css"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Hidden, Visible } from "react-grid-system";
import firebase from 'firebase/app';
import "firebase/auth";


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

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}





function Navbar() {

    const [userAvarter, setAvarter] = useState(null);
    useEffect(() => {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                let userAvarter = user.photoURL;

                setAvarter(userAvarter);

            } else {
                // No user is signed in.
            }
        });
    })




    return (
        <>
            <div className="navbar">
                <Link to="/">
                    <div className="logo">

                    </div>
                </Link>
                <Hidden sm xs md>
                    <div className="nav-actions">
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>About</p>
                    </div>
                </Hidden>
                <div className="icon">
                    {userAvarter != null ? <img src={`${userAvarter}`} style={{width: 32,borderRadius:25}} /> :
                        <IconButton color="primary" style={{ marginTop: "-10px" }}>
                            <PersonAdd />
                        </IconButton>
                    }
                </div>

            </div>
        </>


    );
}
export default Navbar;
