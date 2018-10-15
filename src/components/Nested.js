import React from "react";
import NavLink from "./NavLink";

const Nested = props => (
  <div>
    <h2>Nested</h2>
    <ul>
      <li>
        <NavLink partial={false} to="./">
          Nested Home
        </NavLink>
      </li>
      <li>
        <NavLink to="sec">Second Nest</NavLink>
      </li>
    </ul>
    {props.children}
  </div>
);

export default Nested;
