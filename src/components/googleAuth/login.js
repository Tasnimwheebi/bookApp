import React from 'react';

import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './refreshToken';
import {  useState } from "react";

const clientId =
  '357204051329-qs437p9pbevptlq3bf423vqfvcjf12hg.apps.googleusercontent.com';

function Login() {
  const [user,setUser] = useState('');

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍.`
    );
    refreshTokenSetup(res);
    setUser(res.profileObj.name);

    return user;
  };
  const onFailure = (res) => {
    alert(
      `Failed to login. 😢 `
    );
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px',display:"flex"}}
        isSignedIn={true}
        />
    </div>
  );
}

export default Login;