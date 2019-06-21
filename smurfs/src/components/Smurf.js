import React from "react";

const Smurf = props => {
  const {
    smurf: { name, age, height }
  } = props;
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{height}</div>
    </div>
  );
};

export default Smurf;
