import React from "react";

import { Navbar } from "../components/Shared/Navbar/Navbar";
import { Dashboard } from "../components/Dashboard/Dashboard";

import "./Router.scss";

export const Router = () => {
  return (
    <div className="Router">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Dash">
        <Dashboard />
      </div>
    </div>
  );
};
