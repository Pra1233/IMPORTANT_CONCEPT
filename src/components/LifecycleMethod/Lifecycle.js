import React, { Component } from "react";

class LifecycleMethod extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component did mount");
    // Simulate fetching data from an API after the component has mounted
    setTimeout(() => {
      this.setState({ data: "Hello, World!" });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    console.log("Render");
    return <div>{this.state.data}</div>;
  }
}

export default LifecycleMethod;
