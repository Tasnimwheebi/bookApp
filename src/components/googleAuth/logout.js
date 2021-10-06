import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
'357204051329-qs437p9pbevptlq3bf423vqfvcjf12hg.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        style={{display:"flex" }}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;