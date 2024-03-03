const { Component } = require("react");

class Life extends Component {
  constructor(props) {
    super(props);
    this.state = { last: "Singh" };
  }

  componentDidMount() {
    console.log("Component Did Mount");
    setTimeout(() => {
      this.setState({ last: "Ashok" });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  render() {
    console.log("Render");
    return <h1>{this.state.last}</h1>;
  }
}

export default Life;
