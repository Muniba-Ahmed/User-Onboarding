//All IMPORTS
import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import * as yup from "yup";
import UserForm from "./UserForm";
import schema from "./formSchema";

//initial state
const initialFormValues = {
  username: "",
  password: "",
  email: "",
  tos: false,
};

const initialFormErrors = {
  username: "",
  password: "",
  email: "",
  tos: "",
};

function App() {
  //states
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    axios
      .post("https://reqres.in/api/users", formValues)
      .then((res) => {
        setUsers([res.data], ...users);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  return (
    <div className="App">
      <UserForm
        values={formValues}
        change={inputChange}
        errors={formErrors}
        submit={formSubmit}
      />
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.name} </p>
          <p>{user.email} </p>
        </div>
      ))}
    </div>
  );
}

export default App;
