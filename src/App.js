import { useState } from "react";
import "./styles.css";

export default function App() {
  //method2
  const [Fullname, setFullname] = useState({
    fname: "",
    lname: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullname((prevValue) => {
      if (inputName === "fname") {
        return {
          fname: newValue,
          lname: prevValue.lname
        };
      } else if (inputName === "lname") {
        return {
          fname: prevValue.fname,
          lname: newValue
        };
      }
    });
    // if (inputName === "fname") {
    //   setFullname({ fname: newValue });
    // } else {
    //   setFullname({ lname: newValue });
    // }
    // inputName === "fname"
    //   ? setFullname({ fname: newValue })
    //   : setFullname({ lname: newValue });
  }

  //method1
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");

  // function updatefname(event) {
  //   const fisrtname = event.target.value;
  //   setFname(fisrtname);
  // }
  // function updatelname(event) {
  //   const lastname = event.target.value;
  //   setLname(lastname);
  // }

  return (
    <div className="App">
      <h1>
        Hello {Fullname.fname} {Fullname.lname}
      </h1>
      <input
        onChange={handleChange}
        name="fname"
        placeholder="First Name"
        value={Fullname.fname}
      />
      <br />
      <input
        onChange={handleChange}
        name="lname"
        placeholder="Last Name"
        value={Fullname.lname}
      />
      <br />
      <button>Submit</button>
    </div>
  );
}
