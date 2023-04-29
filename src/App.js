import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [submmit, setSubmmit] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstnameChange = (e) => {
    setValue({ ...value, firstname: e.target.value });
  };

  const handleLastnameChange = (e) => {
    setValue({ ...value, lastname: e.target.value });
  };

  const handleEmailChange = (e) => {
    setValue({ ...value, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.email && value.firstname && value.lastname) {
      setValid(true);
    }
    setSubmmit(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
        {submmit && valid ? (
          <div className="success-message">Registration Success</div>
        ) : null}
        <input
          onChange={(e) => handleFirstnameChange(e)}
          value={value.firstname}
          placeholder="First Name"
          type="text"
          className="form-field"
        />
        {submmit && !value.firstname ? (
          <span>Please enter firstname</span>
        ) : null}
        <input
          onChange={(e) => handleLastnameChange(e)}
          value={value.lastname}
          placeholder="Last Name"
          type="text"
          className="form-field"
        />
        {submmit && !value.lastname ? (
          <span>Please enter firstname</span>
        ) : null}
        <input
          onChange={(e) => handleEmailChange(e)}
          value={value.email}
          placeholder="E-mail"
          type="email"
          className="form-field"
        />
        {submmit && !value.email ? <span>Please enter firstname</span> : null}
        <button>Register</button>
      </form>
    </div>
  );
}

export default App;
