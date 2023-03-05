import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import User from "./components/User";
import Home from "./pages/Home";
function App() {
  const { isAuthenticated } = useAuth0();
  
  return (
    <div className="App">
      <Navigation isAuthenticated={isAuthenticated}/>
      <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<User/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;