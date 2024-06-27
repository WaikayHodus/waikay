import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Reg = () => {
  const [fname, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [passcode, setPasscode] = useState("");
  const [admincode, setAdmincode] = useState("");

  const handleReg = (e) => {
    if (
      (userType === "Admin" && passcode !== "waikayprint") ||
      (userType === "User" && admincode !== "waikayprint")
    ) {
      e.preventDefault();
      alert("invalid code");
    } else {
      e.preventDefault();

      axios
        .post("http://localhost:8000/User", {
          fname: fname,
          username: username,
          userType: userType,
          password: password,
          admincode: admincode,
          passcode: passcode,
        })
        .then((res) => {
          alert("Registration Successful");
          window.location.reload();
          // const conf = window.confirm('Successfully Registered')
          // if (conf) {
          // window.location.reload();
          // }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="cal">
      <form onSubmit={handleReg} className="acc-form">
        <input
          type="radio"
          name="user-type"
          value="User"
          onChange={(e) => setUserType(e.target.value)}
        />{" "}
        User
        <input
          type="radio"
          name="user-type"
          value="Admin"
          onChange={(e) => setUserType(e.target.value)}
        />{" "}
        Admin
        <p>Name</p>
        <input
          type="text"
          value={fname}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <p>Username</p>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <p></p>
        {userType === "Admin" ? (
          <div>
            <p>Admin code</p>
            <input
              type="password"
              value={admincode}
              onChange={(e) => setAdmincode(e.target.value)}
              required
            />{" "}
          </div>
        ) : null}
        <p></p>
        {userType === "Admin" ? (
          <div>
            <p>Passcode</p>
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              required
            />{" "}
          </div>
        ) : (
          <div>
            <p>Admin Code</p>
            <input
              type="password"
              value={admincode}
              onChange={(e) => setAdmincode(e.target.value)}
              required
            />{" "}
          </div>
        )}
        <p></p>
        <button className="btn"> REGISTER </button>
        <p className="reg">
          already registered? <Link to="/Login">LOGIN</Link>
        </p>
      </form>
    </div>
  );
};

export default Reg;
