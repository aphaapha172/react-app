import React, { useEffect } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { user } from "./api/authApi";

function App() {
  const initLogin = async () => {
    await user()
      .then((resp) => {
        console.log(resp.data.id);
        // Do something with user information
      })
      .catch((error) => {
        // We want to handle globally
        error.handleGlobally && error.handleGlobally();
      });
  };

  useEffect(() => {
    initLogin();
  }, []);
  return <div className="App">hello</div>;
}

export default App;
