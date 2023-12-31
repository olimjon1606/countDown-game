import { useRef, useState } from "react";

export default function Player() {
  const enteredName= useRef()
  const [name, setName] = useState(null)
 
  function handleChange() {
    setName(enteredName.current.value)
  }
  return (
    <section id="player">
      <h2>Welcome {name??"unknown entity"}</h2>
      <p>
        <input type="text" ref={enteredName} />
        <button onClick={handleChange}>Set Name</button>
      </p>
    </section>
  );
}
