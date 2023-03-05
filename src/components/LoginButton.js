import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; 

const LoginButton = () => {
  
  const { loginWithRedirect } = useAuth0();

  return <button 
  onClick={() => loginWithRedirect()}
  className="text-white bg-blue-400 py-2 px-4"
  >Log In</button>;
};


export default LoginButton;