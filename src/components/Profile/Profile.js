import React from "react";
import NavLink from "../NavLink";

const Profile = props => {
  return (
    <React.Fragment>
      <div className="container pt-5">
        <div className="row">
          <div className="col-2">
            <div className="card">
              <div className="btn-group-vertical">
                <button className="btn btn-secondary btn-block">
                  <NavLink to="./">Posts</NavLink>
                </button>
                <button className="btn btn-secondary btn-block">
                  <NavLink to="photos">Photos</NavLink>
                </button>
                <button className="btn btn-secondary btn-block">
                  <NavLink to="friends">Friends</NavLink>
                </button>
              </div>
            </div>
          </div>
          <div className="col-10">{props.children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
