import React from "react";
//import PropTypes from "prop-types";

const Bio = (props) => {
  return (
    <div>
      <h1>Biographie</h1>
      <br></br>
      My name is {props.firstName} {props.lastName}
      <br></br>
      Age: {props.Age}
      <br></br>
      Gender:{props.Gender}
      <br></br>
      Interest:{props.Interest}
    </div>
  );
};

// Bio.propTypes = {
//   firstName: PropTypes.string,
//   lastName: PropTypes.string,
//   Age: PropTypes.number,
//   Gender: PropTypes.string,
//   Interest: PropTypes.string,
// };
export default Bio;
