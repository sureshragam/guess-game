import {useRef, useState} from 'react'

export default function Player() {
  const [name ,setName] = useState()
  const userInput = useRef("")

  const handleSubmit =() =>{
    setName(userInput.current.value)
  }

  
  return (
    <section id="player">
      <h2>Welcome {name ?? "User"}</h2>
      <p>
        <input type="text" ref={userInput}/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
