import React, { useState } from 'react'
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {  
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal); 
//create state using name as the value and initialized as an empty string
  const [name, setName] = useState ("");
// create a handle change that targets the input field, takes that value, and sets it to that state  
  const handleChange = (inputName) => {
    setName(inputName.target.value)
  };

  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input type="text" value={name} onChange={handleChange} /> 
        </div>
        <Button color="danger" onClick={() => {setModal(true)}}>Click Me</Button>
        {modal && <ModalComponent toggle={toggle} name={name}/>}
        <Button onClick={() => {setName("")}}>Reset</Button>
      </div>
    </div>
  )
}

export default App
