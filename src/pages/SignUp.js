import { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import signup from "./SignUp.module.css";
import doge_big from "../assets/dogehub_logo.svg";
import doge_big_black from "../assets/dogehub_logo_black.svg";
import { auth } from "../firebase/Firebase";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { LogIn } from "./LogIn";
export const SignUp = () => {
  const [animLoader, setAnimLoader] = useState(null);
  const history = useHistory();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dobRef = useRef();
  const [errMessage, setErrMessage] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    const Name = nameRef.current.value;
    const Email = emailRef.current.value;
    const Password = passwordRef.current.value;
    const DOB = dobRef.current.value;
    const data = {
      Name: Name,
      Email: Email,
      Password: Password,
      DateOfBirth: DOB,
    };
    fetch("https://dogehub2021-default-rtdb.firebaseio.com/Users.json", {
      method: "POST",
      body: JSON.stringify(data),
    });
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        setAnimLoader(true);
        setTimeout(() => {
          history.replace("/");
        }, 2000);
      })
      .catch((err) => {
        setErrMessage(`⚠ ${err}`);
        console.log(err.message);
      });
  }
  return (
    <Router>
      <div className={signup.center_fix}>
        <div className={signup.main_container}>
          <section className={signup.logo_container}>
            <img className={signup.doge_logo} src={doge_big} alt="doge_img" />
            <h2 className={signup.title}>Dogehub</h2>
          </section>
          <h3 style={{ paddingLeft: 16 }}>Sign Up</h3>
          <form className={signup.input_container} onSubmit={submitHandler}>
            <input
              type="text"
              className={signup.input}
              ref={nameRef}
              placeholder="Name"
              autoComplete="off"
              required
            />
            <input
              type="email"
              className={signup.input}
              ref={emailRef}
              placeholder="Email"
              autoComplete="off"
              required
            />

            <input
              type="password"
              className={signup.input}
              ref={passwordRef}
              placeholder="Password"
              autoComplete="off"
              required
            />
            <label className={signup.dob_container} htmlFor="dob">
              Date of Birth
              <input
                id="dob"
                type="date"
                className={signup.input_dob}
                ref={dobRef}
                autoComplete="off"
                min="01-01-1950"
                max="01-01-2016"
                required
              />
            </label>
            <button className={signup.submit_button}>
              Sign Up
              {animLoader ? (
                <img
                  className={signup.doge_logo_signup}
                  src={doge_big_black}
                  alt="doge_img"
                />
              ) : null}
            </button>
            <p className={signup.login_text}>
              You have an account already ?
              <Link className={signup.login_link} exact to="/login">
                {" "}
                Log in here
              </Link>
            </p>
            <p style={{ textAlign: "center" }}>{errMessage}</p>
          </form>
        </div>
      </div>
      <Switch>
        <Route path='/login' exact component={LogIn}/>
      </Switch>
    </Router>
  );
};
