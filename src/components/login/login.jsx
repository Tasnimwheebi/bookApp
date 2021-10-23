import React from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import Header from '../header/header';
import Background from '../../assets/bImage.jpg';
import GoogleAuth from '../googleAuth/login';
import GoogleLogout from '../googleAuth/logout';
import { useState , useContext } from 'react';
import  {LoginContext}  from '../../context/authContext';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
function SignIn() {
        const useStyles = makeStyles((theme) => ({
        FormSignIn:{
            marginLeft: "5%",
            width: "31%",
            textAlign: "center",
        },
        Auth:{
            marginTop: "4%",
            textTransform: "capitalize"
        },

    }));
    const classes = useStyles(); 
    const contextType  = useContext(LoginContext);
    const [username, setUsername]= useState({});
    const [password, setPassword]= useState({});
     
  const handleChange = e => {
    setUsername({...username,[e.target.name]: e.target.value})
    setPassword({...password,[e.target.name]: e.target.value})
  };
  const handleSubmit = e => {
    e.preventDefault();
    contextType.login(username.username, password.password);
  };
    return (
        <div >
            <style>{`body { background-image:url(${Background}) ;background-repeat: no-repeat;background-size:cover}`}</style>
            <Header />
            <Grid container >
                <Grid xl className={classes.FormSignIn}>
                    <Typography variant="h3" 
                    style={{
                        fontfamily: 'Righteous', 
                        fontweight: "bolder",
                        fontSize: "4em",
                        marginBottom: "4%",
                    }}
                    >
                        Sign In
                    </Typography>
                    <form
                      onSubmit={handleSubmit}
                    >
                        <TextField
                            onChange={handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Enter your username"
                            name="username"
                            type="text"
                        />
                        <TextField
                            onChange={handleChange}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <div className={classes.Auth}>
                            <Button type="submit"
                            style={{
                                width:" 40%",
            marginBottom: "2%",
            color: "white",
            fontWeight: "bolder",
            textTransform: "capitalize",
            backgroundColor: "rgb(236, 73, 9)",
            
                            }}
                            >sign in</Button>
                        </div>
                      <Link to="/signup">  <p  
                        style={{
                            textDecoration: "none",
                            color: "black"
                        }}
                        >
                            {"Don't have google account? You Can Sign Up Now "}
                        </p> </Link>
                      
                    </form>
                            <p>or sign in using Google</p>
                    <div style={{display:"flex", marginLeft:"6%",marginTop:"5%" , justifyContent:"space-around"}}>
                    <GoogleAuth  />
                    <GoogleLogout/>
                       </div>
                </Grid>
                <Grid xs ></Grid>
            </Grid>
        </div>
    )
}
export default SignIn;