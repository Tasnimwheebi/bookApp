import React from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, Grid, Button } from '@material-ui/core';
import logo from '../../assets/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import  {LoginContext}  from '../../context/authContext';
import {  useContext } from 'react';

function Header() {
    const contextType  = useContext(LoginContext);
    const useStyles = makeStyles((theme) => ({
        Container:{
            "padding": "2%",
            "alignItems": "center"
        },
        Logo:{
            "marginRight": "3%",
        },
        button:{
           "paddingLeft": "3%",
            "padding-right": "3%",
            "fontWeight": "bolder",
            "textTransform": "capitalize",
            "float": "left"
        },
        SignIn :{
            "float": "right",
            "paddingLeft": "4%",
           "paddingRight": "4%",
        },
        SignUpBtn: {
            "backgroundColor": "rgb(236, 73, 9)",
            "color": "white",
            "marginLeft": "1%",
            "float": "right",
            "paddingLeft": "4%",
           "paddingRight": "4%",
        }
    }));
    const classes = useStyles(); 
    return(
        <>
         <Toolbar>
                <Grid container className={classes.Container}>
                    <Grid xl className={classes.Logo}>
                        <Link to="/">
                            <img src={logo} alt="logo" style={{"width": "4em"}}/>
                        </Link>
                    </Grid>
                    <Grid xs>
                        <Link to="/home"><Button className={classes.button}  >Home</Button></Link>
                        <Link to="/"><Button className={classes.button} >about us</Button></Link>
                        <Link to="/"><Button  className={classes.button} >contact us</Button></Link>
                    </Grid>

                    <Grid xs className={classes.Auth}>          
          { contextType.user.username ?
          <>
               <Button  onClick={contextType.logout} className={classes.SignUpBtn}>Log Out</Button>
               <Button className={classes.SignIn} >Hello ,{contextType.user.username} </Button>
               </>
               : 
               <Link to="/signin"><Button className={classes.SignUpBtn} >sign in</Button></Link>
          }
          </Grid>
                </Grid>
            </Toolbar>
                                </>
    )
}
export default Header;