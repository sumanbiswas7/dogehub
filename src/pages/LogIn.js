import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import login from "./LogIn.module.css";
import doge_big from "../assets/dogehub_logo.svg";
import { auth } from "../firebase/Firebase";

export const LogIn = () => {
  const history = useHistory();
  const [errMessage, setErrMessage] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
        history.replace("/");
      })
      .catch((err) => {
        setErrMessage(`⚠ ${err}`);
        console.log(err.message);
      });
  };
  return (
    <div className={login.center_fix}>
      <div className={login.main_container}>
        <section className={login.logo_container}>
          <img className={login.doge_logo} src={doge_big} alt="doge_img" />
          <h2 className={login.title}>Dogehub</h2>
        </section>
        <h3 style={{ paddingLeft: 16 }}>Log In</h3>
        <form className={login.input_container} onSubmit={submitHandler}>
          <input
            type="email"
            className={login.input}
            ref={emailRef}
            placeholder="Email"
            autoComplete="off"
            required
          />

          <input
            type="password"
            className={login.input}
            ref={passwordRef}
            placeholder="Password"
            autoComplete="off"
            required
          />
          <button className={login.submit_button}>Log In</button>
          <p style={{ textAlign: "center" }}>{errMessage}</p>
        </form>
      </div>
    </div>
  );
};
