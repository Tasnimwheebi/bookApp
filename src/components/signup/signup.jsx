import React from "react";
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import Header from '../header/header';
import Background from '../../assets/bImage.jpg';
import { LoginContext } from '../../context/authContext';
import { useState , useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

function SignUp (){
    const useStyles = makeStyles((theme) => ({
        FormSignIn:{
            marginLeft: "5%",
            width: "31%",
            textAlign: "center"
        },
        
        Auth:{
            marginTop: "4%",
            textTransform: "capitalize"
        }
    }));
    const classes = useStyles(); 
    const contextType = useContext(LoginContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('userinfo', username, email, password);
          contextType.signUp(username, email, password);
      };
    return(
        <div >
            <style>{`body { background-image:url(${Background}) ;background-repeat: no-repeat;background-size:cover}`}</style>
            <Header />
            <Grid container >
                <Grid xl className={classes.FormSignIn}>
                    <Typography variant="h3"
                     style={{
                        fontfamily: "'Righteous', cursive",
                        fontweight: "bolder",
                        fontSize: "4em",
                        marginBottom: "4%",
                    }}>
                        Sign Up
                    </Typography>
                    <form
                      onSubmit={handleSubmit}
                    >
                        <TextField
                           onChange={(e) => setUsername(e.target.value)}
                           value={username} 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="User Name"
                            name="userName"
                            type="text"
                        />
                        <TextField
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Example@email.com"
                            name="email"
                            type="email"
                        />
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                        />
                        <div className={classes.Auth}>
                        <Button type="submit"
                         style={{
                            width:" 40%",
        marginBottom: "2%",
        color: "white",
        fontWeight: "bolder",
        textTransform: "capitalize",
        backgroundColor: "rgb(236, 73, 9)"
                        }}>sign up</Button>
                        </div>
                      <Link to="/signin" >  <p 
                         style={{
                            textDecoration: "none",
                            color: "black"
                        }}>
                            {"Already have an account? Sign In"}
                        </p> </Link>
                    </form>
                </Grid>
                <Grid xs ></Grid>
            </Grid>
        </div>
    )
}

export default SignUp;