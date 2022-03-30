import React from "react";

const UserForm = (props) => {
  const { change, submit, errors } = props;
  const { username, email, password, tos } = props.values;

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
      <p>{errors.username}</p>
      <p>{errors.password}</p>
      <p>{errors.email}</p>
      <p>{errors.tos}</p>
      <form className="form container" onSubmit={onSubmit}>
        <label>
          {" "}
          Username
          <input
            value={username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>
        <label>
          {" "}
          Password
          <input
            value={password}
            onChange={onChange}
            name="password"
            type="password"
          />
        </label>
        <label>
          {" "}
          Email
          <input value={email} onChange={onChange} name="email" type="email" />
        </label>

        {/**Radio button */}
        <label>
          {" "}
          Terms of Service
          <input
            values={tos}
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
