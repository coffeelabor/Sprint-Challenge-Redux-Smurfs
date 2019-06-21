import React, { Component } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

class SmurfContainer extends Component {
  componentDidMount() {
    console.log("Smurf Mount");
    this.props.getSmurfs();
  }

  render() {
    return (
      <div>
        <h1>howdy</h1>
        {this.props.smurfs.map(smurf => (
          <Smurf smurf={smurf} key={smurf.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfContainer);
