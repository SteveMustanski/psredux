import React, { Component } from "react";
import { Link } from "react-router";

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron mt-4">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router in ES6</p>
        <Link to="about" className="btn btn-primary btn-lg">
          Learn More
        </Link>
      </div>
    );
  }
}

export default HomePage;
