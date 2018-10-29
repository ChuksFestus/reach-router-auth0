import React, { Component } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Router } from "@reach/router";

import "./app.css";
import Profile from "./components/Profile/Profile";
import Photos from "./components/Profile/ProfilePhotos";
import ProfileHome from "./components/Profile/ProfileHome";
import Friends from "./components/Profile/Friends";
import FriendProfile from "./components/Profile/FriendProfile";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Router>
          <Home path="/" />
          <Profile path="profile">
            <ProfileHome path="/" />
            <Photos path="photos" />
            <Friends path="friends" />
            <FriendProfile path=":friendName" />
          </Profile>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
