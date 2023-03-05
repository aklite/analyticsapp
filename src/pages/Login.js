import React,{useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {useNavigate} from "react-router-dom"
const Login = () => {
  const { loginWithRedirect,isAuthenticated } = useAuth0();
  const navigate=useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);


  return <div>
    <button onClick={() => loginWithRedirect()}>Log In</button>;
  </div>
};

export default Login;