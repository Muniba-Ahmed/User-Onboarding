import React from "react";

const UserForm = (props) => {
  const { values, change, submit } = props;
  const { username, email, password, tos } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div>
      <h1>User Onboarding Form!</h1>
      <form className="form container" onSubmit={onSubmit}>
        <label>
          {" "}
          Username
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>
        <label>
          {" "}
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="email"
          />
        </label>
        <label>
          {" "}
          Password
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>
        {/**Radio button */}
        <label>
          {" "}
          Terms of Service
          <input
            values={values.tos}
            onChange={onChange}
            name="tos"
            type="checkbox"
            checked={tos}
          />
        </label>
        <input type="submit" value="Create a User" />
      </form>
    </div>
  );
};

export default UserForm;
