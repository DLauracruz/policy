import React from "react";

import { Birthday } from "../Birthday/Birthday";
import { Promotions } from "../Promotions/Promotions";
import { Charts } from "../Charts/Charts";

import "./Dashboard.scss";

export const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="Promotions">
        <Promotions />
      </div>
      <div className="Charts">
        <Charts />
      </div>
      <div className="Birthday">
        <Birthday />
      </div>
    </div>
  );
};
