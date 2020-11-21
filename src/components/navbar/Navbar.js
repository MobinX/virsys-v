import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box";
import { IconButton, Link, Typography } from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";
import logo from "../../assets/logo.png";

import "./navbar.css"





function Navbar() {

    


    return (
        <>
        <div className="navbar">
            <div className="logo">

            </div>
            <div className="nav-actions">
                <p>Features</p>
                <p>Pricing</p>
                <p>About</p>
            </div>
            <div className="icon">
                <IconButton color="primary" style={{marginTop: "-10px"}}>
                    <PersonAdd />
                </IconButton>
            </div>

        </div>
        </>


    );
}
export default Navbar;
