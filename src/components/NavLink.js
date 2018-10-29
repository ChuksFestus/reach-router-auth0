import React from "react";
import { Link } from "@reach/router";

const NavLink = props => {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            color: isCurrent ? "wheat" : "white"
          }
        };
      }}
    />
  );
};

export default NavLink;
