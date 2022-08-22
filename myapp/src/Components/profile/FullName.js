import React from "react";
//import PropTypes from "prop-types";

const FullName = ({ firstName, lastName, handleName, children }) => {
  return (
    <div>
      <button onClick={() => handleName()}> UserName</button>
      <h1
        myStyle={{
          textAlign: "center",
          color: "rgb(9, 30, 90)",
          textTransform: "uppercase",
          fontFamily: "Roboto Condensed",
          margin: "auto",
        }}
      >
        {firstName} {lastName} {children}
      </h1>
    </div>
  );
};

// FullName.propTypes = {
//   firstName: PropTypes.string,
//   lastName: PropTypes.string,
//   handleName: PropTypes.func,
// };
export default FullName;
