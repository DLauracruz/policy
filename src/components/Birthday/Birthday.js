import React, { useState } from "react";

import "./Birthday.scss";

export const Birthday = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const [opcion, setOpcion] = useState(0);
  console.log(arr);

  return (
    <div id="Birthday">
      <h3>Reminders</h3>
      <ul>
        <li
          className={opcion === 0 ? "selected" : ""}
          onClick={() => setOpcion(0)}
        >
          Birthday
        </li>
        <li
          className={opcion === 1 ? "selected" : ""}
          onClick={() => setOpcion(1)}
        >
          Policies
        </li>
        <li
          className={opcion === 2 ? "selected" : ""}
          onClick={() => setOpcion(2)}
        >
          Registrations
        </li>
      </ul>

      <div className="cards">
        {arr.map(() => (
          <div className="card">
            <div className="info">
              <h4>test1234</h4>
              <span>
                <i class="far fa-calendar-alt"></i> 14/12/2020 15:42
              </span>
              <span>Customer: Humberto Perez</span>
              <label>Testing Suspense</label>
            </div>
            <div className="icons">
              <i class="fas fa-border-all"></i>
              <i class="far fa-eye"></i>
              <i class="fas fa-times"></i>
            </div>
            <div className="footer">
              <span>Auto</span>
              <span>Veronica M Galvado</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
