import React from "react";
import {Link} from 'react-router-dom';
import Header from '../../components/header/header';
import { Button } from '@material-ui/core';
import Background from '../../assets/bImage.jpg'
import { makeStyles } from '@material-ui/core/styles';

function Landing() {
    const useStyles = makeStyles((theme) => ({
        Text:{
            marginTop: "10%",
            marginLeft: "5%",
            width: "45%",
            textTransform: "capitalize"
        },
        Auth:{
            marginTop: "6%",
            marginLeft: "30%",
        },
        SignUpBtn:{
            color: "white",
            marginLeft: "3%",
            float:"left",
            paddingLeft: "4%",
            paddingRight: "4%",
            backgroundColor: "rgb(236, 73, 9)",
            border:" rgb(236, 73, 9) solid",
    textTransform: "capitalize",
            textDecoration:"none"        }
    }));
    const classes = useStyles(); 
    return (
        <div>
            <style>{`body { background-image: url(${Background});background-repeat: no-repeat;background-size: cover; }`}</style>
            <Header />
            <div className={classes.Text}>
                <h1
                style={{
                    fontFamily: 'Righteous', 
                    fontWeight: "bolder",
                    fontSize: "5em"
                }}
                 >Book app</h1>
                <p
                style={{
                    fontSize: "1.1em",
    lineHeight: "1.3em"
                }}
                >
                    You know our goal at Book app is to help you spend less time searching for books so you can spend more time reading! Read on to see the many insightful, witty, and motivating things that have been said about reading by authors, poets, scientists, artists, visionaries and even comedians.                </p>
                <div className={classes.Auth}>
                    <Link to="/signin"><Button
                    style={{
                        color: "rgb(236, 73, 9)",
    paddingLeft: "4%",
    paddingRight: "4%",
    float: "left",
    fontWeight: "bolder",
    textTransform: "capitalize",
    border: "rgb(236, 73, 9) solid"
                    }}
                    >sign in</Button></Link>
                    <Link to="/signup"><Button className={classes.SignUpBtn}>sign up</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;