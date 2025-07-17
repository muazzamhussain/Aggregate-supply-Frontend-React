import { useState } from "react";
import "./App.css";
import Home from "../src/pages/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Nav, header, etc. */}
      <Outlet /> {/* Renders nested route components here */}
    </div>
  );
}

export default App;
