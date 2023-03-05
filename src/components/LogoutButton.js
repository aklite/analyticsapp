import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./utils.css"
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button 
    onClick={() => logout({ returnTo: window.location.origin })}
    className="text-white bg-blue-400 py-2 px-4"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;