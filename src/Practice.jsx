import React from "react";
import { useState } from "react";

export default function Practice() {
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    setContact((prevValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname,
          email: prevValue.email
        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fname: prevValue.fname,
          lname: prevValue.lname,
          email: value
        };
      }
    });
  }

  return (
    <div>
      <h1>
        Hello {contact.fname} {contact.lname}
      </h1>
      <p>{contact.email}</p>
      <input
        onChange={handleChange}
        name="fname"
        placeholder="First Name"
        value={contact.fname}
      />
      <br />
      <input
        onChange={handleChange}
        name="lname"
        placeholder="Last Name"
        value={contact.lname}
      />
      <br />
      <input
        onChange={handleChange}
        name="email"
        placeholder="Email"
        value={contact.email}
      />
      <br />
      <button>Submit</button>
    </div>
  );
}
