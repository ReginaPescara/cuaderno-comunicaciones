import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const result = await firebase.auth().signInWithPopup(provider);
      console.log(result.user);
      // Aquí puedes manejar el usuario que ha iniciado sesión.
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
    </div>
  );
};

export default GoogleLoginButton;
