import React from "react";

class Posts extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts?&_limit=10")
      .then(res => res.json())
      .then(posts => {
        this.setState({ posts });
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="row">
        {posts.map(post => (
          <div className="col-4" key={post.id}>
            <div
              className="card mb-4"
              style={{
                boxShadow: " 0 2px 4px 0 rgba(0,0,0,0.10)",
                border: "none",
                height: "300px"
              }}
            >
              <div className="card-body">
                <p className="font-weight-bold">{post.title}</p>
                <p>{post.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
