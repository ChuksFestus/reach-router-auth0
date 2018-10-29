import React from "react";
import { Link } from "@reach/router";

class Friends extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    fetch("https://json-data-gjokofmgvj.now.sh/users")
      .then(res => res.json())
      .then(friends => {
        this.setState({ friends });
      });
  }

  render() {
    const { friends } = this.state;
    console.log("fried", friends);
    return (
      <React.Fragment>
        <div className="row">
          {friends.map(friend => (
            <div className="col-3" style={{ marginBottom: "1rem" }}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={friend.picture}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title text-center text-capitalize">
                    <Link to={`${friend.name.first}`}>
                      {friend.name.first} {friend.name.last}
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
