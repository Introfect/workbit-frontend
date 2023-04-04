
import React from "react";
import Home from "./components/Home";
import { Routes,Route } from "react-router-dom";
import Dashboard from "./components/private/Dashboard";
import PrivateRoutes from "./components/private/PrivateRoutes";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userprofile" element={<PrivateRoutes/>} >
        <Route path="dashboard" element={<Dashboard />}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
