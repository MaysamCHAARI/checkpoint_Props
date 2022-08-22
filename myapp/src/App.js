import "./App.css";
import FullName from "./Components/profile/FullName";
import Bio from "./Components/profile/Bio";
import Profession from "./Components/profile/Profession";
function App() {
  const handleName = () => {
    alert("Maysam CHAARi");
  };
  const Skills = ["*Coding", "*Design", "*writing", "-HTML/CSS", "-JAVASCRIPT"];
  return (
    <div>
      <FullName firstName="Maysam" lastName="CHAARI" handleName={handleName}>
        <img
          src="./Img.jpg"
          alt="./Img.jpg"
          style={{ width: "250px", paddingLeft: "300px" }}
        />
      </FullName>

      <p
        style={{
          borderStyle: "solid",
          borderWidth: "medium",
          fontSize: "20px",
          padding: "20px",
          marginLeft: "500px",
          marginRight: "500px",
        }}
      >
        <Bio
          firstName="Maysam"
          lastName="CHAARI"
          Age={26}
          Gender="Female"
          Interest="Designing,coding"
        />
      </p>
      <Profession liste={Skills} />
    </div>
  );
}

export default App;
