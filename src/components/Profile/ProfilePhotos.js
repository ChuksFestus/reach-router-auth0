import React from "react";

class Photos extends React.Component {
  state = {
    photos: []
  };
  componentDidMount() {
    fetch("https://json-data-gjokofmgvj.now.sh/photos")
      .then(res => res.json())
      .then(photos => this.setState({ photos }));
  }

  render() {
    const { photos } = this.state;
    return (
      <React.Fragment>
        <div className="row">
          {photos.map(photo => (
            <div
              key={photo.url}
              className="col-4"
              style={{ marginBottom: "1rem" }}
            >
              <img
                src={photo.url}
                alt=""
                style={{ height: "250px", width: "100%" }}
                className="img-fluid img-thumbnail"
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Photos;
