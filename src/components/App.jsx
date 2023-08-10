import React, { useState } from "react";

function App() {
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");

  function Updatefname(event) {
    const fName = event.target.value;

    setname(fName);
  }
  function Update(event) {
    const lName = event.target.value;
    setlastname(lName);
  }
  return (
    <div className="container">
      <h1>
        Hello {name} {lastname}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={name}
          onChange={Updatefname}
        />
        <input name="lName" placeholder="Last Name" onChange={Update} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
