import React, { Component } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";

class SmurfContainer extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };
  render() {
    return (
      <div>
        <h1>howdy</h1>
        {this.props.smurfs.map(smurf => (
          <Smurf smurf={smurf} key={smurf.id} />
        ))}
        <form onSubmit={this.addSmurf}>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChanges}
          />
          <input
            name="age"
            value={this.state.age}
            onChange={this.handleChanges}
          />
          <input
            name="height"
            value={this.state.height}
            onChange={this.handleChanges}
          />
          <button>Add Smurf</button>
        </form>
      </div>
    );
  }
  componentDidMount() {
    console.log("Smurf Mount");
    this.props.getSmurfs();
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addSmurf = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(newSmurf);
  };
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(SmurfContainer);
