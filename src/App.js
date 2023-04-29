import "./App.css";

function App() {
  return (
    <div className="form-container">
      <form className="register-form">
        <input placeholder="First Name" type="text" className="form-field" />
        <input placeholder="Last Name" type="text" className="form-field" />
        <input placeholder="E-mail" type="email" className="form-field" />
        <button>Register</button>
      </form>
    </div>
  );
}

export default App;
