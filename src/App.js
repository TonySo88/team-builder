import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import TeammemberForm from "./components/TeammemberForm";
import Teammembers from "./components/Teammembers";

function App() {
  const [teammember, setTeammember] = useState(
    [{
      id: Date.now(),
      name: "Tony",
      email: "tony@google.com",
      role: "owner",
    }]
  );

const addTeammember = newTeammember => {
  setTeammember([...teammember, newTeammember])
}

  return (
    <div className="App">
      <h1>Team Builder Form</h1>
      <TeammemberForm addTeammember={addTeammember}/>
      <Teammembers teammembers={teammember}/>
    </div>
  );
}

export default App;
