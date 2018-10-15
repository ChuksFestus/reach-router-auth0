import React from "react"
import { Link } from "@reach/router"

const Navigation = () => (
  <nav className="nav">
    <Link className="nav-link" to="/">Home</Link>
    <Link className="nav-link" to="/urlparams/first">First url-param</Link>
    <Link className="nav-link" to="/urlparams/second">Second url-param</Link>
    <Link className="nav-link" to="/nested">Nested</Link>
  </nav>
)

export default Navigation