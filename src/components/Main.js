import React from "react";
import { Router } from "@reach/router";

import Home from "./Home";
import Urlparams from "./UrlParams";
import Nested from "./Nested";
import NestHome from "./NestHome";
import SecondNest from "./SecondNest";

const Main = () => (
  <Router>
    <Home path="/" />
    <Urlparams path="/urlparams/:paramsId" />
    <Nested path="nested">
      <NestHome path="/" />
      <SecondNest path="/sec" />
    </Nested>
  </Router>
);

export default Main;
