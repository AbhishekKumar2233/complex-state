import { useState } from "react";
import Practice from "./Practice";
import "./styles.css";

export default function App() {
  //method2
  const [Fullname, setFullname] = useState({
    fname: "",
    lname: ""
  });

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    //value=newValue
    //name=inputName
    const { value, name } = event.target;

    setFullname((prevValue) => {
      return {
        ...prevValue,
        [name]: value
        //
      };
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: prevValue.lname
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: prevValue.fname,
      //     lname: value
      //   };
      // }
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
      <hr />
      <Practice />
    </div>
  );
}
