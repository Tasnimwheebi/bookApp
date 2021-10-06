import React from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import { useState, useEffect } from 'react';
import base64 from 'base-64';
const SECRET = '123456789';
export const LoginContext = React.createContext();

function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [isValid, setInvalid] = useState(true);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const token = cookie.load('auth');
    validateToken(token);
  }, []);
  const login = async (username, password) => {
    try {
      const encoded = base64.encode(`${username}:${password}`)
      let url = `https://vybin.herokuapp.com/api/v1/auth/signin`
      const result = await fetch(
        url,
        {
          method: 'post',
          mode: 'cors',
          cache: 'no-cache',
          headers: { Authorization: `Basic ${encoded}` },
        }
      );
      let data = await result.json();
      validateToken(data.token);
      setUserData(data);
    } catch (error) {
      setInvalid(false);
    }

  }


 const validateToken = (token) => {
    try {
      let user = jwt.verify(token, SECRET);
      setLoginState(true, token, user);
    }
    catch (e) {
      setLoginState(false, null, {});
    }
  };

  const logout = () => {
       setLoginState(false, null, {});
    deleteCookie('auth');
  };

  function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  const signUp = async function (username, email, password) {
     try {
      let url = `https://vybin.herokuapp.com/api/v1/auth/register`;
      let body = { username, email, password};
      let result = await fetch(
        url,
        {
          method: 'post',
          mode: 'cors',
          cache: 'no-cache',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        }
      )
      let user = await result.json();
     alert
      (`hello ${user.userData.username} , Now you can signin 😍`)
       console.log('user',user.userData.username)
      return user;
      
    } catch (error) {
      console.log(error);
    }

  }
  const setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    setUser(user);
    setLoggedIn(loggedIn);
    setInvalid(isValid)
  };
  const state = { login, logout, signUp, loggedIn, user, isValid, userData };
 
  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
}
export default LoginProvider;