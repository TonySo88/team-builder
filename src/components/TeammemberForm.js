import React, { useState } from "react";

const TeammemberForm = (props) => {
  const [teammember, setTeammember] = useState({
    id: Date.now(),
    name: "",
    email: "",
    role: "",
  });
  
  const changeHandler = (event) => {
      setTeammember({...teammember, [event.target.name]: event.target.value})

  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.addTeammember(teammember)

        setTeammember({id: Date.now(), name: "", email: "", role: ""})
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Childhood Best Friend"
        value={teammember.name}
        onChange={changeHandler}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        placeholder="ATM PIN"
        value={teammember.email}
        onChange={changeHandler}
      />
      <label htmlFor="role">Role:</label>
      <input
        id="role"
        type="text"
        name="role"
        placeholder="Social Security Number"
        value={teammember.role}
        onChange={changeHandler}
      />
      <button type="submit">CLICK TO WIN A MILLION DOLLARS!</button>
    </form>
  );
};

export default TeammemberForm;
