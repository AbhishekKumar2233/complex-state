import { useState } from "react";
import "./styles.css";

export default function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  function updatefname(event) {
    const fisrtname = event.target.value;
    setFname(fisrtname);
  }
  function updatelname(event) {
    const lastname = event.target.value;
    setLname(lastname);
  }

  return (
    <div className="App">
      <h1>
        Hello {fname} {lname}
      </h1>
      <input
        onChange={updatefname}
        name="fname"
        placeholder="First Name"
        value={fname}
      />
      <br />
      <input
        onChange={updatelname}
        name="lname"
        placeholder="Last Name"
        value={lname}
      />
      <br />
      <button>Submit</button>
    </div>
  );
}
