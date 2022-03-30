//All IMPORTS
import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import * as yup from "yup";
import UserForm from "./UserForm";

//initial state
const initialFormValues = {
  username: "",
  email: "",
  password: "",
  tos: false,
};

function App() {
  //states
  const [formValues, setFormValues] = useState(initialFormValues);

  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {};

  return (
    <div className="App">
      <UserForm values={formValues} change={inputChange} />
    </div>
  );
}

export default App;
