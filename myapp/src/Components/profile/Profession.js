import React from "react";
//import PropTypes from "prop-types";

const Profession = (props) => {
  return (
    <div>
      <p
        style={{
          margin: "100px",
          marginTop: "50px",
          color: "black",
          size: "1.5em",
        }}
      >
        <div>
          <div>
            <h5>
              <h2>Profession</h2>
            </h5>
            <p>
              I am currently a student at GO My Code Academy,looking for a new
              opportunity as a software Developper . I have some experience in
              Design . Motivated, curious, ambitious, always looking to improve
              my skills.
            </p>
            <p>
              <h3>
                <h3>SKIILS</h3>
                {props.liste.map((el, i) => (
                  <h5 Key={i}>{el}</h5>
                ))}
              </h3>
            </p>
          </div>
        </div>
      </p>
    </div>
  );
};

// Profession.propTypes = {
//   liste: PropTypes.array,
// };
export default Profession;
