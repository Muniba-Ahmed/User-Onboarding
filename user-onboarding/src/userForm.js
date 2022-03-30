import React from "react";

const userForm = (props) => {
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {};

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
            checked={checked}
          />
        </label>
        <input type="submit" value="Create a User" />
      </form>
    </div>
  );
};

export default userForm;
