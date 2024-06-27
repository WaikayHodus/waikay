import { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//import AuthContext from "./Auth";
import Cookies from "universal-cookie";
//import jwt from "jwt-decode";
import { useHistory } from "react-router-dom";
import Table from "./Table";
//import {toast} from "react-toastify"
// import axios from "./api/axios";
// const Login_url = "/Auth1";
import axios from "axios";
import { BiUniversalAccess } from "react-icons/bi";
const Login = () => {
  // First Attempt

  //     const history = useHistory();
  //     const [username, setUsername] = useState('');
  //     const [password, setPassword] = useState('');

  // const handleLog = (e) => {
  //     e.preventDefault();

  //     if (validate()) {

  //         //console.log('proceed')
  //         fetch("http://localhost:8000/User/" + username).then(res => {
  //            // console.log(res)
  //             return res.json();
  //         })
  //         .then(resp => {
  //               //  console.log(resp);
  //             if (Object.keys(resp).length === 0) {
  //                 alert ('Please Enter A Valide Username!')
  //             } else {
  //                 if (resp.password === password) {
  //                     history.push('/')
  //                 } else {
  //                     alert ('Please Enter A Valide Password!')
  //                 }
  //             }
  //         })
  //         .catch((err) => {
  //             console.log(err);
  //             alert ('Login failed due to :'+ err.message)
  //         });
  //     }

  // }

  // const validate=()=> {
  //             let result = true;
  //             if (username === "" || username === null) {
  //                 result = false;
  //                 alert('Please Enter Username')
  //               //  toast.warning('Please Enter Username')
  //             }

  //             if (password === "" || password === null) {
  //                 result = false;
  //                 alert('Please Enter Password')
  //                 //toast.warning('Please Enter Password')
  //             }
  //             return result;
  //              }

  // Second Attempt
  const [formdata, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const [success, setSuccess] = useState(false);
  const history = useHistory();
  //const cookie = new Cookies();
  //const jwt = require("jsonwebtoken");
  //require("dotenv").config();

  const handleLog = (e) => {
    e.preventDefault();

    let isvalid = true;
    let validationErrors = {};

    if (formdata.username === "" || formdata.username === null) {
      isvalid = false;
      validationErrors.username = "Username required; ";
    }

    if (formdata.password === "" || formdata.password === null) {
      isvalid = false;
      validationErrors.password = "Password required";
    } else if (formdata.password.length < 4) {
      isvalid = false;
      validationErrors.password = "Passwod length at least 4 characters; ";
    }

    //const jwt = require("jsonwebtoken");

    axios
      .get("http://localhost:8000/User", formdata)
      .then((result) => {
        result.data.map((user) => {
          if (user.username === formdata.username) {
            if (user.password === formdata.password) {
              alert("Login Successful");
              history.push("/Table");
              setSuccess(true);
              if (success) {
                const print = formdata.username;
                // const token = jwt.sign({ print }, "jwtSecret", {
                //   expiresIn: 300,
                // });
                // result.json({ token: token });
                //<Table callUser={() => success} />;
              }
            } else {
              isvalid = false;
              validationErrors.password = "Wrong Password !";
            }
          } else if (formdata.username !== "") {
            isvalid = false;
            validationErrors.username = "Wrong Username : ";
          }
        });
        setErrors(validationErrors);
        setValid(isvalid);
      })
      .catch((err) => console.log(err));
  };

  // const verifyJWT = (req, res, next) => {
  //   const token = req.header["x-access-token"];

  //   if (!token) {
  //     res.send("Not connected");
  //   }
  // };

  // axios.get("http://localhost:8000/User", verifyJWT, (req, res) => {
  //   res.send("yo are connected");
  // });

  //Third Attempt

  // const { setAuth } = useContext(AuthContext);
  // const userRef = useRef();
  // const errRef = useRef();

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [errMsg, setErrMsg] = useState("");
  // const [success, setSuccess] = useState(false);

  // const User = axios("http://localhost:8000/User");
  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [username, password]);

  // const handleLog = async (e) => {
  //   e.preventDefault();

  //   // auth for Login
  //   const usersDB = {
  //     users: require("http://localhost:8000/User"),
  //     setUsers: function (data) {
  //       this.users = data;
  //     },
  //   };

  //   const bcrypt = require("bcryptjs");

  //   const jwt = require("jsonwebtoken");
  //   require("dotenv").config();
  //   const fsPromises = require("fs").promises;
  //   const path = require("path");

  //   const handleLogin = async (req, res) => {
  //     const { username, password } = req.body;
  //     if (!username || !password)
  //       return res
  //         .status(400)
  //         .json({ message: "Username and password are required." });
  //     const foundUser = await User.findOne({ username }).exec();
  //     if (!foundUser) return res.sendStatus(401); //Unauthorized
  //     // evaluate password
  //     const match = await bcrypt.compare(password, foundUser.password);
  //     if (match) {
  //       const roles = Object.values(foundUser.roles).filter(Boolean);
  //     }
  //   };

  //   try {
  //     const response = await axios.get(
  //       " http://localhost:8000/User",
  //       JSON.stringify({ username, password }),
  //       {
  //         header: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       }
  //     );
  //     console.log(JSON.stringify(response?.data));

  //     const accessToken = response?.data?.accessToken;
  //     const roles = response?.data?.roles;
  //     setAuth({ username, password, accessToken });
  //     setUsername("");
  //     setPassword("");
  //     setSuccess(true);
  //   } catch (err) {
  //     if (!err?.response) {
  //       setErrMsg("No server response");
  //     } else if (err.response?.status === 400) {
  //       setErrMsg("Missing username or password");
  //     } else if (err.response?.status === 401) {
  //       setErrMsg("Unauthoized");
  //     } else {
  //       setErrMsg("Login failed");
  //     }
  //     errRef.current.focus();
  //   }
  // };

  return (
    // <>
    //   {success ? (
    //     <div>
    //       <h2>Login Successful</h2>
    //     </div>
    //   ) : (
    //     <div className="cal">
    //       <p ref={errRef} aria-live="assertive">
    //         {errMsg}
    //       </p>
    //       <form onSubmit={handleLog} className="acc-form">
    //         <label htmlFor="username"> Username:</label>
    //         <br />
    //         <input
    //           type="text"
    //           name="username"
    //           ref={userRef}
    //           autoComplete="off"
    //           class="form-control"
    //           onChange={(e) => setUsername(e.target.value)}
    //           value={username}
    //           required
    //         />
    //         <br />
    //         <label htmlFor="username"> Password:</label>
    //         <br />
    //         <input
    //           type="password"
    //           name="password"
    //           class="form-control"
    //           autoComplete="off"
    //           onChange={(e) => setPassword(e.target.value)}
    //           value={password}
    //           required
    //         />
    //         <br />
    //         <button className="btn">Login</button>
    //         <p className="reg">
    //           not registered Yet? <Link to="/Reg">DO IT NOW</Link>
    //         </p>
    //       </form>
    //     </div>
    //   )}
    // </>

    // Second Form
    <div className="cal">
      <form onSubmit={handleLog}>
        {valid ? (
          <></>
        ) : (
          <span className="dangerMsg">
            {errors.username}
            {errors.password}
          </span>
        )}
        <p>Username</p>
        <input
          type="text"
          name="username"
          class="form-control"
          autoComplete="off"
          onChange={(e) =>
            setFormData({ ...formdata, username: e.target.value })
          }
        />
        <p>Password</p>
        <input
          type="password"
          name="password"
          class="form-control"
          autoComplete="off"
          onChange={(e) =>
            setFormData({ ...formdata, password: e.target.value })
          }
        />
        <p></p>
        <button className="btn"> LOGIN</button>
        <p className="reg">
          not registered Yet? <Link to="/Reg">DO IT NOW</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
